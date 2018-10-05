---
path: "/experimenting-with-mob-programming"
date: "2018-10-04T20:59:52.322Z"
title: "Experimenting with Mob Programming"
tags: [agile, extreme programming]
draft: false
---

At [BMT](https://www.bmt.org/) we hold an annual hackathon for employees where we can spend three days working on something we don't normally do.

The aim is to develop new skills, work with new people and generally have a good time. It can be quite hard work but the experience in invaluable, previous years have included projects such as:

- Dogecopter - A quadcopter with image recognition / autonomous navigation capabilities (well, in theory)
- Sodalicious - A 3D printed drinks dispenser with partnering mobile website to take orders
- Sentimental - A sentiment analysis engine which consumes tweets, analyses their sentiment and plots a happiness (or sadness) map!

![Docker logo](docker-logo.png)

This year some of the ideas included designing a virtual reality interface for astronauts, teaching a machine learning algorithm to play retro computer games and using genetic algorithms to play flappy bird!

## Meta hack

Personally I wanted to explore the process of software development and opted setup a team to experiment with [Mob Programming](https://en.wikipedia.org/wiki/Mob_programming) as this is not typically a process we would use. Whilst our aim was to develop a product which could be shipped, we would do it as a Mob and see what we could learn.

## Mob Programming?

Mob programming is an extreme/agile programming approach where the whole team works on the same time in the same place at the same time as described by [Woody Zuill](https://www.youtube.com/watch?v=SHOVVnRB4h0).

This can be interpreted in different ways as many agile principals but we implemented `Mobbing` as our whole team working in the same room, with a single monitor and keyboard and having a single team member typing at any one point in time, rotating the role of 'Scribe' at a set interval.

Specifically we chose:

- A team size of 5, with a range of experiences from Principal developer, mid level & a year in industry student
- A keyboard time of 12 minutes so we could cycle in an hour
- A common start time, lunch time and end of the day

## Benefits on paper

Hackathons can be quite stressful, the pressure to produce something can lead to long days and disagreement within the team as to approach. I hoped that Mob programming would bring our small team together and allow us to focus on working as a team as much as working on a product.

Beyond this, we hoped to achieve the following:

- Shared understanding of the system (increasing [bus factor](https://en.wikipedia.org/wiki/Bus_factor) / redundancy)
- Common agreed approach - The team must agree the route forward, people can't [go rogue](https://www.merriam-webster.com/words-at-play/were-going-rogue) or implement changes which the team doesn't want.
- Learn from each other - everything from technical approach to keyboard shortcuts
- Shared ownership - Less individual stress and pressure because the team is equally responsible for delivering
- No significant slowdown in output - Whilst in theory one person typing is slower than 5, other efficiencies can be realised, such as: no merge conflicts, no dependencies on development in serial, no configuration inconsistencies

## Potential worries

The process when outlines was quite a long way from our standard day to day process. There were some initial worries, typical questions might include:

- "Can we actually get anything done?"
- "Isn't this going to be slower?"
- "What do we do when we don't know what to type?"
- "What do we do if a team member isn't there?"

## What happened

We started by deciding on our environment and tools. We were writing a web app which is something we we're familiar with but one of our hypothesis was that through group knowledge we could use a tool or technique as long as at least one person knew enough about it to guide others.

We opted for [VS Code](https://code.visualstudio.com/) as an editor which two of our team had never used.

After deciding on our IDE we chose to use React & Create React App to scaffold the start of our application. Two of our number were new to these tools and we intentionally started with those two at the keyboard so they would get experience of setting up the project from scratch.

What's interesting is that the three more experienced developers naturally started explaining not only how to achieve tasks, but what was happening, "now it's installing the dependencies", "you get a skeleton test setup out of the box" etc.

## Hitting a problem

As we moved through the initial setup we reached a point where we'd written a client side app and had a [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issue, this was our first experience of hitting a problem with several possible solutions.

We naturally stopped typing and time ticked away as we discussed possible options. As a group we decided that we would stop the timer if we weren't actively typing code to ensure that people still had typing equality.

One important observation is that as we discussed hacky workarounds such as tweaking the browser security settings (it was a hackathon after all!) the group organically came to the conclusion that "we may as well do it properly". I truly feel that the group had at this point made a decision about it's attitude to code quality which meant we weren't going to be able to get away with the type of shortcuts you may be able to sneak in as an individual "to save time".

Interestingly we then started by using the `express` generator and decided that it was overkill for the single endpoint we needed, deleted the whole thing and then wrote a Node back-end in a few lines. Again, our attitude as the team was that we didn't need all that extra view and routing code and the redundant code was not helpful.

I feel these messages weren't just broadcast as at that point in time, but would actually sink in as a general attitude to development. What better way to demonstrate your approaches and attitudes to quality than to actively demonstrate then in part of your team.

##

## Summary

We really enjoyed our time Mob Programming and would seriously think about adopting this on other projects, either as a learning task, or during initial design sessions.

We will continue experimenting and feed back progress, give it a go yourself, I'd love to know what you think.

This article is also posted at [BMT Reality Studios](https://www.bmtrealitystudios.com/experimenting-with-mob-programming/)




