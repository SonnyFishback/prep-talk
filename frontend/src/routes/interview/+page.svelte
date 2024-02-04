<script lang="ts">
    import Label from "$lib/components/ui/label/label.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { Ear, Speech, ThumbsDown, ThumbsUp } from 'lucide-svelte';
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
    import { enhance } from '$app/forms';
    
    // import Slider from "$lib/components/ui/slider/slider.svelte";
    import type { PageData } from './$types';
    // export let data: PageData;
    export let form : PageData;
    $:questions = form?.questions ? form.questions : [];
</script>

<main class="p-5">
    {#if !questions.length}
        <form
            action="?/generate"
            method="post"
            class="min-h-[40vh] flex flex-col justify-between"
            use:enhance
        >
            <Label>
                Job Description:
                <Textarea name="description" class="my-5"/>
            </Label>
            
            <!-- Can't use this slider to submit forms? -->
            <!-- <Label>
                Challenge Level:
                <Slider max={10} class="my-5"/>
            </Label> -->
            <Button type="submit">Submit</Button>
        </form>
    {:else}
        <h2 class="font-bold text-xl">Questions:</h2>
        {#each questions as { question }, i}
         <section class="m-5 flex flex-col">
            <h4>{i + 1}. {question}</h4>
            <Button variant="secondary" class="mt-5">
                <Ear class="mr-2"/>
                Hear Question
            </Button>
            <Button class="mt-5 ani">
                <Speech class="mr-2"/>
                Answer Question
            </Button>
         </section>
           <div class="m-5">
                <p class="text-lg">How was this question?</p>
                <ToggleGroup.Root type="single" class="flex justify-start">
                    <ToggleGroup.Item value="up">
                        <ThumbsUp/>
                    </ToggleGroup.Item>
                    <ToggleGroup.Item value="down">
                        <ThumbsDown/>
                    </ToggleGroup.Item>
                </ToggleGroup.Root>
           </div>
         <Separator/>
        {/each}
    {/if}
</main>