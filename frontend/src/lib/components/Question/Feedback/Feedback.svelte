<script>
    import { ThumbsDown, ThumbsUp } from 'lucide-svelte';
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
</script>

<div class="m-5">
    <p class="text-sm">How was this question?</p>
    <ToggleGroup.Root type="single" class="flex justify-start">
        <ToggleGroup.Item value="up">
            <ThumbsUp/>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="down">
            <ThumbsDown/>
        </ToggleGroup.Item>
    </ToggleGroup.Root>
</div>