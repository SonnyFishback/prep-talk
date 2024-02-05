<script lang="ts">
	import { Ear, Speech } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';
	import Dialog from '$lib/components/Dialog/Dialog.svelte';
	import Feedback from './Feedback/Feedback.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { mediaQuery } from 'svelte-legos';
	import { PUBLIC_AWS_ACCESS_KEY_ID, PUBLIC_AWS_SECRET_ACCESS_KEY } from '$env/static/public';

	import { PollyClient, SynthesizeSpeechCommand } from '@aws-sdk/client-polly';

	export let question: string;
	export let i: number;
	export let open = false;

	const isDesktop = mediaQuery('(min-width: 768px)');

	const speak = async () => {
		try {
			const config = {
				region: 'us-west-2',
				credentials: {
					accessKeyId: PUBLIC_AWS_ACCESS_KEY_ID,
					secretAccessKey: PUBLIC_AWS_SECRET_ACCESS_KEY
				}
			};
			const client = new PollyClient(config);
			const input = {
				Engine: 'standard',
				LanguageCode: 'es-US' ,
				OutputFormat: 'mp3',
				SampleRate: '24000',
				Text: question,
				TextType: 'text',
				VoiceId:'Aditi'
			};
			const command = new SynthesizeSpeechCommand(input);
			const { AudioStream } = await client.send(command);
			
			const audioBlob = await new Response(AudioStream).blob();

			const audioUrl = URL.createObjectURL(audioBlob);

			const audio = new Audio(audioUrl);

			return await audio.play();
			
		} catch (error) {
			console.error(error);
		}
	};

</script>

<section class="m-5 flex flex-col">
	<h4><span class="font-bold">{i + 1}.</span> {question}</h4>
	<Button variant="secondary" class="mt-5" on:click={() => {
		(open = true);
		speak();
	}}>
		<Ear class="mr-2" />
		Hear Question
	</Button>
	<Button class="mt-5 ani" on:click={() => (open = true)}>
		<Speech class="mr-2" />
		Answer Question
	</Button>
</section>
<Feedback />
<Separator />

{#if $isDesktop}
	<Dialog {open} />
{:else}
	<Drawer {open}  text={question} on:play={speak}/>
{/if}
