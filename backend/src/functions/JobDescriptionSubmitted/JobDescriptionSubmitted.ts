import {
    APIGatewayProxyEventV2,
    APIGatewayProxyHandlerV2,
    APIGatewayProxyResultV2
} from 'aws-lambda';

export const handler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    try {
        console.info('Job Description Submitted', JSON.stringify(event, null, 2));
        const body = {
            questions: [
                {
                    question: 'What is your name?'
                },
                {
                    question: 'Tell me some things about yourself.'
                },
                {
                    question: 'Tell me about a time you had to work with a difficult person. How did you handle it?'
                }
            ]
        }
        return {
            statusCode: 200,
            body: JSON.stringify(body),
            isBase64Encoded: false
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'An error occurred processing your request.',
            isBase64Encoded: false
        };
    };
};