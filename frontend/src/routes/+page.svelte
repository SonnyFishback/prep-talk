<script lang='ts'>
	import { enhance } from '$app/forms';
    import type { ActionData } from './$types';
    import Button from '$lib/components/ui/button/button.svelte'
    export let form: ActionData;
    $:data = console.log(form);
    const jobDescription = `
        Job Title: Junior Software Engineer

        Location: San Francisco, CA

        Job Description:

        We are looking for an enthusiastic Junior Software Engineer to join our development team. The ideal candidate will have a passion for technology and software development, with a willingness to learn and grow. You will work alongside experienced engineers to design, develop, and maintain software applications.

        Responsibilities:

        Assist in the design, development, and implementation of software applications.
        Write clean, maintainable, and efficient code under the guidance of senior engineers.
        Participate in code reviews to maintain code quality and share knowledge.
        Collaborate with cross-functional teams to identify and resolve software issues.
        Contribute to the development of technical documentation and user manuals.
        Stay up-to-date with new technologies and programming best practices.
        Qualifications:

        Bachelor's degree in Computer Science, Engineering, or related field.
        Knowledge of programming languages such as Java, C++, Python, or JavaScript.
        Familiarity with software development methodologies like Agile and Scrum.
        Basic understanding of databases and web development technologies.
        Strong problem-solving and analytical skills.
        Excellent communication skills and ability to work in a team environment.
        Eagerness to learn and adapt to new challenges.
    `
</script>

<main class='flex'>
    <h2>Upload a job description to generate interview questions:</h2>
    <form action='?/generate' method='post' use:enhance class='flex'>
        <textarea name='description' id='description' cols='30' rows='10' value={jobDescription}/>
        <Button type="submit">Submit</Button>
    </form>
</main>