<script lang="ts">
    import Question from '$lib/components/Question/Question.svelte';
    import QuestionForm from '$lib/components/InterviewForm/InterviewForm.svelte';
    import { Progress } from "$lib/components/ui/progress";
    import type { PageData } from './$types';
    // export let data: PageData;
    export let form : PageData;
    let progress = 0;
    $:questions = form?.questions ? form.questions : [];
</script>

<main class="p-5">
    {#if !questions.length }
        <QuestionForm />
    {:else}
    <div class="flex items-center">
            <h2 class="font-bold text-xl mr-3">Questions:</h2>
            <Progress class="my-5 h-2" value={progress} max={100}/>
        </div>
        {#each questions as { question }, i}
            <Question question={question} i={i}/>
        {/each}

    {/if}
</main>