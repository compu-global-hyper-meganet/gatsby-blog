---
path: "/experimenting-with-mob-programming"
date: "2018-10-04T20:59:52.322Z"
title: "Experimenting with Mob Programming"
tags: [agile, extreme programming]
draft: false
---

At [BMT](https://www.bmt.org/) we hold an annual [Hackathon](https://en.wikipedia.org/wiki/Hackathon) for employees where we can spend three days working on something we don't normally do.
The aim is to develop new skills, work with new people and generally have a good time.

I wanted to explore the _process_ of software development and opted setup a team to experiment with [Mob Programming](https://en.wikipedia.org/wiki/Mob_programming) as this is not typically a process we would use. Whilst our aim was to develop a product which could be shipped, we would do it as a Mob and see what we could learn.

## Mob Programming?

Mob programming is an extreme/agile programming approach where the whole team works on the same time in the same place at the same time as described by [Woody Zuill](https://www.youtube.com/watch?v=SHOVVnRB4h0).

This can be interpreted in different ways as many agile principals but we implemented `Mobbing` as our whole team working in the same room, with a single monitor and keyboard and having a single team member typing at any one point in time, rotating the role of *Typer* at a set interval.

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

## Potential concerns

The Mob Programming process is quite a long way from our standard day to day development practices. There were some initial worries, typical concerns include:

> "Can we actually get anything done?"

> "Isn't this going to be slower?"

> "What do we do when we don't know what to type?"

> "What do we do if a team member isn't there?"

## What happened

We started by deciding on our environment and tools. We were writing a web app which is something we we're familiar with but our ethos was that through group knowledge we could use a tool or technique as long as at least one person knew enough about it to guide others.

We opted for [VS Code](https://code.visualstudio.com/) as an editor which two of our team had never used.

After deciding on our IDE we chose to use React & Create React App to scaffold the start of our application. Two of our number were new to these tools and we intentionally started with those two at the keyboard so they would get experience of setting up the project from scratch.

What's interesting is that the more experienced developers naturally started explaining not only how to achieve tasks, but what was happening,

> "now it's installing the dependencies"

> "you get a skeleton test setup out of the box"

## Hitting a problem

As we moved through the initial setup we reached a point where we'd written a client side app and had a [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issue, this was our first experience of hitting a problem with several possible solutions.

We naturally stopped typing and time ticked away as we discussed possible options. As a group we decided that we would stop the timer if we weren't actively typing code to ensure that people still had typing equality.

One important observation is that as we discussed hacky workarounds such as tweaking the browser security settings (it was a hackathon after all!) the group organically came to the conclusion that

>"we may as well do it properly"

 I truly feel that the group had at this point made a decision about it's attitude to code quality which meant we weren't going to be able to get away with the type of hacks you may be tempted to sneak in as an individual *"to save time"*.

Interestingly we then started by using the `express` generator but decided it was overkill, deleted the whole thing and then wrote a Node back-end in a few lines. Again, our attitude as the team was that we didn't need all that extra view and routing code and the redundant code was not helpful.

I feel these messages weren't just broadcast as at that point in time, but would actually sink in as a general attitude to development. What better way to demonstrate your approaches and attitudes to quality than to actively demonstrate them in part of your team.

## Running out of content

As we developed more of our app, we hit a point where we weren't sure what to do next. Firstly this manifested as knowing what we wanted to *do* but not knowing how to achieve it without research. Sometimes it was helpful if the *typer* took a couple of minutes to look something up on behalf of the team, but with larger issues we took the approach of having the team research independently and then re-instruct the *typer* once we found a solution; seeing as the whole team was looking for a solution, we generally found the relevant API page, or example within a few minutes.

The second manifestation was when we hadn't lined up the next feature or that feature was poorly defined. In these cases we stopped development and the timer and went back to discussion and whiteboards.
Personally I found whiteboards invaluable here as it was a good way to both illustrate and idea to discuss, but then leave something for reference which everyone could see.

Typically this took the form of one person drawing a solution and presenting it to the team, who then questioned it. Sometimes a second person would join the drawing to amend or correct. At this point, we found our team had a psuedo demoncratic process of acceptance where people would pretty much vote yes / no if they were happy to proceed.

## Summary

We learnt a lot as a team, both how to perform tasks and how to explain processes, clear communication was critical, especially when instructing the *typer*. For example, asking the *typer* to insert content between two lines ended up as:

> "Insert  `<code>`  on  line  8.5"

Whilst there are some possible issues, particularly around team members who are naturally more introverted I believe an understanding team can find a way to ensure their voice is heard.

We really enjoyed our time Mob Programming and would seriously think about adopting this on other projects, either as a learning task, or during initial design sessions.

We will continue experimenting and feed back progress, give it a go yourself, We'd love to know what you think.

## Appendix

For anyone who's interested the app we wrote is on [GitHub](https://github.com/bmtwebdevs/tradeoff).

Here is a list of quote I captured over the 3 days:

> "I’m  having  too  much  fun"

> "That’s  a  game  changer"

>"This  is  a  really  good  learning  exercise"

> "I  feel  like  I’m  getting  a  free  coding  lesson  /  training"

> "This  would  be  really  good  for  complex  stuff"

> "What  awesome  feature  are  we  doing  next?"

> "Squirly  braces"

> "How  do  I  do  that?"

> "You  can  do  that  with  <shortcut>"

> "What’s  a  back-tick?"

> "Did  we  ask  you  to  type  that?"

> "If  my  work  day  was  like  this  every  day,  I’d  be  loving  life"

> "Where  is  the  *&(*£&ing  hash  key"
