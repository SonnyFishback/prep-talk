import {
    APIGatewayProxyEventV2,
    APIGatewayProxyHandlerV2,
    APIGatewayProxyResultV2
} from 'aws-lambda';
import OpenAI from 'openai';
const openai = new OpenAI();

export const handler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    try {
        if (!event.body) throw new Error('No job description provided');
        const response = await generateQuestions(event.body);
        console.log(response);
        // return {
        //     statusCode: 200,
        //     body: JSON.stringify(response),
        //     isBase64Encoded: false
        // };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'An error occurred processing your request.',
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
                    content: 'Please generate me some practice technical interview questions based on the following job description. Please ensure each question is its owm separate index in a json array'
                },
                {
                    role: 'system',
                    content: jobDescription
                }
            ],
            response_format: { type: 'json_object' }
        })
        return completion.choices[0]
    } catch (error) {
        console.error(error);
    }
}