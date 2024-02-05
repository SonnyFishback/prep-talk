<script>
	import * as Drawer from '$lib/components/ui/drawer';
	import { Ear } from 'lucide-svelte';
    import Button from "$lib/components/ui/button/button.svelte";
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    export let open = false;
	export let text = "";
</script>

<Drawer.Root bind:open>
	<Drawer.Content>
		<Drawer.Header>
			<Drawer.Title>
				<div class="flex items-center justify-center">Listen Carefully <Ear/></div>
			</Drawer.Title>
			<Drawer.Description>{text}</Drawer.Description>
		</Drawer.Header>
		<Drawer.Footer>
			<Button on:click={() => dispatch('play')}>Play</Button>
			<Drawer.Close>Close</Drawer.Close>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
