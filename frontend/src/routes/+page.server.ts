import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    generate: async ({ request, fetch }) => {
        const form = await request.formData();
        const description = form.get('description');
        const url = 'https://licf9v0cx2.execute-api.us-east-1.amazonaws.com/generate';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description }),
        }
        const response = await fetch(url, options);
        const data = await response.json();
        console.info('data', data);
    }
} satisfies Actions;