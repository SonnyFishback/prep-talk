import {
    APIGatewayProxyEventV2,
    APIGatewayProxyHandlerV2,
    APIGatewayProxyResultV2
} from 'aws-lambda';
import OpenAI from 'openai';
const openai = new OpenAI();

export const handler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    try {
        if (!event.body) throw new Error('Bad Request: No body provided.`');

        const questions = await generateQuestions(event.body);
        return {
            statusCode: 200,
            body: JSON.stringify({ questions }),
            isBase64Encoded: false
        };
    } catch (error) {
        console.info(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error }),
            isBase64Encoded: false
        };
    };
};

const generateQuestions = async (jobDescription: string) => {
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            messages: [
                {
                    role: 'system',
                    content: 'Please generate me some practice technical interview questions based on the following job description. Please ensure each question is its owm separate index in a json array. Ensure that the name of the array is questions.'
                },
                {
                    role: 'system',
                    content: jobDescription
                }
            ],
            response_format: { type: 'json_object' }
        })
        const data = JSON.parse(completion.choices[0].message.content || '{}')
        return data.questions || [];
    } catch (error) {
        console.info(error);
    }
}