<script lang='ts'>
	import { enhance } from "$app/forms";
    import type { ActionData } from './$types';
    export let form: ActionData;
</script>

<main>
    <h2>Upload a job description to generate interview questions:</h2>
    <form action="?/generate" method="post" use:enhance>
        <textarea name="description" id="description" cols="30" rows="10"/>
        <button>Submit</button>
    </form>
</main>