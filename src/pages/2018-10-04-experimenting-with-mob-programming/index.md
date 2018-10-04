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

## Automating the workflow

To automate the process of adding a template through the web interface and starting the process we must first start our container and manually get it to the state we want it to be when we start it later on.

```bash
docker build -t nifitest .
docker run -p 8080:8080 -d nifitest
```

You should now be able to load the web interface and add the template we added earlier; we can then click `play` to get our workflow running.

Now it's in a running state we need to copy that state out somehow, this is the bit which isn't documented too well! The state of the NiFi is stored in `flow.xml.gz` which lives in `/opt/nifi/nifi-1.6.0/conf/`.

To copy that file out of the container we can start an interactive `bash` by first listing the `container_id` and then running the following commands:

```bash
docker ps -a
docker exec -it <container_id> /bin/bash/
```

This will put us into the container, we can then run the following command to copy out the `flow.xml.gz`

```bash
docker cp <container_id>:/opt/nifi/nifi-1.6.0/conf/flow.xml.gz flow.xml.gz
```

We now have a copy of our NiFi state. Next we need to use that state when we run our container. To do this we can use `COPY` again to copy the file back in each time we start the container.

> NOTE: COPY always copies as root so the user the container runs as (nifi:nifi) won't have access to the file once we copy the file in. We can run a `--chown` at the same time to give ownership to the `nifi` user.

```docker
FROM apache/nifi:latest

COPY our_process.nar /opt/nifi/nifi-1.6.0/lib/

COPY our_workflow.xml /opt/nifi/nifi-1.6.0/conf/templates

COPY --chown=nifi:nifi flow.xml.gz /opt/nifi/nifi-1.6.0/conf/

EXPOSE 8080
```

## Summary

We now have a container which has a custom processor, our template available and the template loaded into the workflow and started.

This makes it as simple as `docker run <image>` when another team member wants to run the NiFi instance.

This article is also posted at [BMT Reality Studios](https://www.bmtrealitystudios.com/dockerising-nifi/)




