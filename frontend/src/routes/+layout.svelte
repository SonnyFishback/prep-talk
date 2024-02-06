<svelte:head>
    <title>Prep Talk</title>
</svelte:head>

<script lang="ts">
    import '../app.css'
    import { Home } from 'lucide-svelte';
    import Button from '$lib/components/ui/button/button.svelte';
</script>
<header class="min-h-[8vh]">
    <Button href='/' class='m-3'>
        <Home/>
    </Button>
</header>
<slot/>