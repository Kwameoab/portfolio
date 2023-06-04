---
title: Rock Paper Chat Write-up
description: Rock Paper Chat is a real time chat app I created with SvelteKit and PocketBase.
published_date: June 03, 2023
modified_date: June 03, 2023
categories:
 - SvelteKit
 - PocketBase
---
## Introduction
I recently finished a full stack real-time chat app called Rock Paper Chat. This article serves as a documentation for my choices and motivation for this project.

## Technology
**I used SvelteKit as my front-end framework for this project**. SvelteKit is a framework for building web applications, similar to Next.js, using Svelte. What is Svelte you might ask? Svelte is a way to write user interface components that will be compiled to HTML and JavaScript. To keep with the earlier analogy SvelteKit is to Svelte what Next.js is to React. Additionally, I used **Skeleton UI** as my UI toolkit. Skeleton UI is a relatively new UI toolkit build on top off [Tailwind CSS](https://tailwindcss.com/). and Svelte. It provided components and a consistent theme for this project.

**I used PocketBase as a back-end framework**. PocketBase is an open source back-end that you can extend with your own custom logic using Golang. It provides an embedded SQLite database that I used to store users, chatrooms, and messages. It also provides authentication management using JWT (JSON Web Token). I added some REST endpoints in addition to the provided REST APIs that come featured with PocketBase.

## Features
- Users are able to register and log in to an account. An account is needed to communicate in a chatroom

- All rooms are a real time chatroom allowing for instant messaging with everyone in the room

- Users are able to update account information such as display name and display initials

- All chatrooms each user has created or spoken in are viewable on a single page for quick access to their favorite rooms

- Users are able to search through all public chatrooms that have been created to quickly and easily join the real time conversation

## Intentions
My main motivation for building this website is that I felt my front-end skills and knowledge were weak, especially considering how important the web and web technologies are in my daily life. I also wanted to explore how real time applications work since they have been a topic of interest to me recently. With all this in mind I decided that a chatroom would be an excellent project to learn and hone my skills.

**I chose to use SvelteKit over React**, or a meta-framework based on React like Next.js, in this project because I strongly dislike writing React code - despite the fact that I have had limited exposure to React. I do not enjoy the React mental model. In other words, the more I learned how to think in React the more I disliked writing React. Svelte felt more intuitive to think and write in compared to React. I will continue to use Svelte and SvelteKit for any projects that require a front-end for the foreseeable future.

I decided to use PocketBase as my back-end solution for three main reasons. First, **it is a FOSS project**. I love being able to read the source code because occasionally the source code is the best guide to solving a problem . Additionally, the GitHub Discussion page was a wealth of information. It answered any questions I had that were not explained in the documentation. Secondly, **it is written in Go**. I thought this would be a good excuse to get more adjusted to the Go ecosystem since I will work in it soon. Lastly, to put it simply **it seems cool to me**. I believe personal projects are a great way to explore technologies that seem cool but I will never have a chance to use in the work place. PocketBase fits those criteria perfectly.  How can the idea of a back-end with an embedded database all in one file not excite anyone that reads about it.

## Extensions
If I were to continue working on this project here some features I would like to add
- More account customization (e.g. bio)
- Room customization: change name of room, have tags for rooms, ability to make some rooms private/invite only
- Infinite scroll or pagination when searching for rooms
- Have message window of each room take up only screen height

## Conclusion
Overall I believe this project was a success because I learned more about the web and I now know which areas of web technologies interest me. I have a positive opinion on all the technologies I ended up using and will try to use them in the future.

## Resources
Here are the resources that helped me when creating this project:
- [SvelteKit • Web development, streamlined](https://kit.svelte.dev/)
- [Skeleton — UI Toolkit for Svelte + Tailwind](https://www.skeleton.dev/)
- [PocketBase - Open Source backend in 1 file](https://pocketbase.io/docs/)
- [SvelteKit & PocketBase - YouTube](https://www.youtube.com/playlist?list=PLq30BP0TIcqW3sMm404UIEA7osPEkKAyg)


