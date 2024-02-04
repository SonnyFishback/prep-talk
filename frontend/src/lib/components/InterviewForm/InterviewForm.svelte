<script lang='ts'>
    import Label from "$lib/components/ui/label/label.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Slider from "$lib/components/ui/slider/slider.svelte";

</script>

<form
action="?/generate"
method="post"
class="min-h-[40vh] flex flex-col justify-between"
>
<Label class="m-5">
    Job Description:
    <Textarea name="description" class="my-3"/>
</Label>

<!-- Can't use this slider to submit form data? -->
<Label class="m-5">
    Challenge Level:
    <Slider max={10} class="my-3"/>
</Label>
<Button type="submit" class="m-5">Submit</Button>
</form>