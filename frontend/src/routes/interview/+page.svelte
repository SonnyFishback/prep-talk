<script lang="ts">
   
    import Question from '$lib/components/Question/Question.svelte';
    import QuestionForm from '$lib/components/InterviewForm/InterviewForm.svelte';
    import type { PageData } from './$types';
    // export let data: PageData;
    export let form : PageData;
    $:questions = form?.questions ? form.questions : [];
</script>

<main class="p-5">
    {#if !questions.length}
        <QuestionForm />
    {:else}
        <h2 class="font-bold text-xl">Questions:</h2>
        {#each questions as { question }, i}
            <Question question={question} i={i}/>
        {/each}

    {/if}
</main>