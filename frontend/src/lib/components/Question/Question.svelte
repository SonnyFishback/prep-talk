<script lang="ts">
	import { Ear, Speech } from 'lucide-svelte';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import Button from '$lib/components/ui/button/button.svelte';
	import Drawer from '$lib/components/Drarwer/Drawer.svelte';
	import Dialog from '$lib/components/Dialog/Dialog.svelte';
	import Feedback from './Feedback/Feedback.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let question: number;
	export let i: number;
	export let open = false;
	import { mediaQuery } from 'svelte-legos';
	const isDesktop = mediaQuery('(min-width: 768px)');
</script>

<section class="m-5 flex flex-col">
	<h4><span class="font-bold">{i + 1}.</span> {question}</h4>
	<Button variant="secondary" class="mt-5" on:click={() => open = true}>
		<Ear class="mr-2" />
		Hear Question
	</Button>
	<Button class="mt-5 ani" on:click={() => open = true}>
		<Speech class="mr-2" />
		Answer Question
	</Button>
</section>
<Feedback />
<Separator />

{#if $isDesktop}
	<Dialog {open} />
{:else}
	<Drawer {open} />
{/if}
