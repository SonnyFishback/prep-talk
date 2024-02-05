<script lang="ts">
	import Label from '$lib/components/ui/label/label.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Lightbulb } from 'lucide-svelte';
	// import Slider from '$lib/components/ui/slider/slider.svelte';
	import { enhance } from '$app/forms';

	export let loading = false;

	const tips = [
		'Practice with mock interviews to build confidence and answer questions smoothly.',
		'Highlight personal projects and learning goals to demonstrate your tech love and growth mindset.',
		"Project confidence, answer honestly, and ask questions about the company and role. Go get 'em!"
	];
</script>

<form
	action="?/generate"
	method="post"
	class="min-h-[40vh] flex flex-col justify-between"
	use:enhance={() => {
		loading = true;
	}}
>
	<Label class="m-5">
		Job Description:
		<Textarea name="description" class="my-3" />
	</Label>

	<!-- <Label class="m-5">
        Challenge Level:
        <Slider max={10} class="my-3" />
    </Label> -->
	<Button type="submit" class="m-5">Submit</Button>
</form>

{#if loading}
    <div class="absolute left-14 top-1/4 w-[70%]">
        <div class="flex justify-center">
            <p class="text-center font-bold">Some tips while you wait</p>
            <Lightbulb class="animate-spin ml-4"/>
        </div>
        <Carousel.Root>
            <Carousel.Content class="flex aspect-square items-center justify-center">
                {#each tips as tip}
                    <Carousel.Item>
                        <div class="p-2">
                            <Card.Root>
                                <Card.Content class="flex aspect-square items-center justify-center p-6">
                                    {tip}
                                </Card.Content>
                            </Card.Root>
                        </div>
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
        </Carousel.Root>
    </div>
{/if}
