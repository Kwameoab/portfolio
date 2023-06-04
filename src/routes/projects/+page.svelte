<script>
    import { base } from '$app/paths';
</script>
<div class="text-center container p-10 mx-auto">
    <h1 class="text-5xl font-bold">My Personal Projects</h1>
    <p class="py-5 text-lg">
        These are some of the projects I have completed or currently working
        on.
    </p>

    <div class="flex justify-center mt-10">
        <div
            class="card lg:card-side bg-base-200 hover:glass hover:outline-dashed shadow-xl md:w-3/5"
        >
            <figure class="lg:w-2/5">
                <img
                    src="images/rock-paper.png"
                    alt="logo for rock paper chat"
                    width="128"
                    height="128"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title justify-center">Rock Paper Chat</h2>
                <p class="mb-4 text-lg">
                    A full stack real-time chat app that allows users to login
                    and register then quickly communicate in chatroom
                </p>
                <em> Made with: SvelteKit, Tailwind (Skeleton), PocketBase </em>

                <div class="card-actions justify-end">
                    <a href="{base}/blog/RP-Chat-Tech-Write-Up">
                        <button class="btn btn-primary">Write-Up</button></a
                    >
                    <a
                        href="https://github.com/Kwameoab/Rock-Paper-Chat"
                        target="_blank"
                    >
                        <button class="btn btn-primary">Github</button></a
                    >
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-10">
        <div
            class="card lg:card-side bg-base-200 hover:glass hover:outline-dashed shadow-xl md:w-3/5"
        >
            <figure class="lg:w-2/5">
                <img
                    src="images/discord.svg"
                    alt="Discord"
                    width="512"
                    height="512"
                    href="https://github.com/Kwameoab/DiscordBot"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title justify-center">Discord Bot</h2>
                <p class="mb-4 text-lg">
                    I created and locally hosted a Discord bot for a server my
                    friends and I use for playing League of Legends
                </p>
                <p class="mb-4 text-lg">
                    The defining feature of the bot is that it is able to <span
                        class="text-primary-focus font-bold"
                        >web scrape
                    </span>and send picture from websites to give us a
                    competitive edge
                </p>
                <p class="mb-4 text-lg">
                    The bot is able to do basic bot commands such as ban, kick
                    and unban
                </p>
                <em>
                    Made with: Python (Libraries used: Discord.py,
                    BeautifulSoup, and Selenium)
                </em>
                <div class="card-actions justify-end">
                    <a
                        href="https://github.com/Kwameoab/DiscordBot"
                        target="_blank"
                    >
                        <button class="btn btn-primary">Github</button></a
                    >
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center mt-10">
        <div
            class="card lg:card-side bg-base-200 hover:glass hover:outline-dashed shadow-xl md:w-3/5"
        >
            <figure class="lg:w-2/5">
                <img
                    src="images/logo.png"
                    alt="Discord"
                    href="https://github.com/Kwameoab/DiscordBot"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title justify-center">Portfolio Website</h2>
                <p class="mb-4 text-lg">
                    I created this website to be a short introduction about me,
                    display my personal projects, and have a place for me to
                    write down my thoughts
                </p>
                <em> Made with: SvelteKit, Tailwind (daisyUI) </em>
                <div class="card-actions justify-end">
                    <a
                        href="https://github.com/Kwameoab/portfolio"
                        target="_blank"
                    >
                        <button class="btn btn-primary">Github</button></a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
