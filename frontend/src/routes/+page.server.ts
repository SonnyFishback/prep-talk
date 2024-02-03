import { walk } from 'svelte/compiler';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async () => {
        return null;
    }
} satisfies Actions;