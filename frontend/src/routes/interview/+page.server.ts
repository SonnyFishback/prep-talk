import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    generate: async ({ request, fetch }) => {
        try {
            const form = await request.formData();
            const description = form.get('description');
            const url = 'https://b7oqgkz2ec.execute-api.us-east-1.amazonaws.com/generate';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description }),
            }
            const response = await fetch(url, options);
            if (!response.ok) {
                console.error(response)
                throw new Error('Uh Oh: Failed to generate questions.');
            }
            const data = await response.json();
            const { questions } = data;
            setTimeout(() => {}, 3000) // timeout to exaggerate loading time
            return {
                questions: questions
            }
        } catch (error) {
            console.error(error);
        }
    }
} satisfies Actions;