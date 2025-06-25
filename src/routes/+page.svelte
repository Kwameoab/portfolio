<script>
    import { Linkedin, Github, Twitter } from "lucide-svelte";
</script>

<div class="text-center container mx-auto">
    <div class="hero h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div>
                <h1 class="text-5xl font-bold">
                    Hi there, I'm <span class="text-primary">Kwame</span>!
                </h1>
                <p class="py-6 text-lg">
                    I am a Computer Science Graduate from
                    <span class="text-primary-focus font-bold"
                        >Vanderbilt University</span
                    >
                    and am currently working as a Software Engineer at
                    <span class="text-primary-focus font-bold">Stripe</span>.
                    <br>Here are some places you can find me:
                </p>
                <p class="flex space-x-5 justify-center">
                    <a
                        href="https://www.linkedin.com/in/kwameoab/"
                        target="_blank"
                        aria-label="LinkedIn"><Linkedin fill="#333" /></a
                    >
                    <a
                        href="https://github.com/Kwameoab"
                        target="_blank"
                        aria-label="Github"><Github fill="#333" /></a
                    >
                    <a
                        href="https://twitter.com/kwameoab"
                        target="=_blank"
                        aria-label="Twitter"><Twitter fill="#333" /></a
                    >
                </p>
            </div>
        </div>
    </div>
</div>
