---
path: "/redeveloping-this-site-again"
date: "2017-08-01T19:43:55.962Z"
title: "Redeveloping this site (again)"
tags: [development, gatsby]
---

When choosing a technical platform for this blog I went through many different options before choosing [GatsbyJS](https://www.gatsbyjs.org/).
Each of those options represented a technology I have personally experienced and enjoyed using in the last year and by using all of these technologies I feel that it has enable me to make the best choice for this blog.

If I was a depth first person, I would still be using the first toolset I came across whilst I may well have become expert in this, I would be an expert in tools of the past. As an alternative, I have worked with far more tools, experience (probably) far more pain, but experience so much more, met some great people in the Open Source community and ended up putting myself out there a lot more.

Read my article on [Why I'm not an expert](/why-i-am-not-an-expert) to hear more about depth vs breadth first learning.

### .NET MVC

Initially I wrote this site in C#.NET MVC a few years ago as this was my day to day development language, it was familiar and easy to me but at the same time fundamentally less rewarding. I wasn't adding the complex features I was being asked to add at work and the front end razor view engine based templates were quite a long way from modern front end / single page applucation (SPA) type development which was more interesting.

Adding blog posts was a pain as I hadn't used a CMS and wasn't really interesting in writing one, so the process for writing new content was to write the HTML by hand add in new routes manually, styling the articles as I went. Doing all this by hand was labourious, ensuring I consistently used my own styles over time became a bore and whilst it was a successful implementation the inclination to keep it maintained over time dwindled.

The resulted in the clarification of the purpose of the blog and methods to use. The goal for the new blog was to allow the adding of content more easily and using more interesting front end technologies that I could use as a basis for learning.

### Ember

Attempt number two used [Ember](https://www.emberjs.com/) as I had recently experienced the library in a commercial environment where I had enjoyed the component based development and learning the structure of an Ember app.

The initial development hit a few hurdles when I tried to add in the materialize css library as part of a design choice. Firstly I hit all kinds of issues getting things installed properly through the ember-cli. Eventually these were overcome but it soured the experience.
Couple this with my personal lack of understanding about the effective use of material design and what I wanted for the blog design wise which was something simple, focussed on the typography. I felt limited by some of the material design choices, but simultaneously as if I wasn't making the best use of it.

Finally with these tools, I encountered no end of issues deploying to my Azure app service from code on github. Primarily this was because although you can run node commands through the GitHub > Azure integration it's not the greatest experience.
The backend would need to run Node on Azure, but also I'd need to perform a build of the ember site as part of the deployment process, this is more tricky than it should be.
Many hours was lost trying to hack together Kudu scripts to install the npm dependencies, perform a build inside azure and copy the right output to the right folder.

Eventually I did get this working, but then it broke again due to some hidden Azure change and I was unable to resolve it this time, enter [Wercker](http://www.wercker.com/). Wercker is a cloud based platform for CI build and deployment tasks. It's built on top of Kubernetes and allows you to do cool things like spin up a linux based node container, run build, test and deployments and then blow it away.

Wercker got things working (pardon the pun) between GitHub, and Ember client side build and an Azure FTP deployment but the painful past, along with a mistaken usage of materialise for design had turned me off the stack.

The takeaways here were that I didn't need something as heavyweight as Ember for a personal blog in terms of all the cool testing and mocking bits it comes with, node builds on Azure weren't fun without an intemdiary such as Wercker and I didn't need / want to use Materialize CSS for this project.

### Vue

### Redis &amp; Markdown

### Gatsby