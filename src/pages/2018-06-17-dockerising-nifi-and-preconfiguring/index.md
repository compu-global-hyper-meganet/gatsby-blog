---
path: "/running-nifi-in-docker"
date: "2018-06-18T10:53:55.962Z"
title: "NiFi in docker with persistant workflow"
tags: [docker, nifi]
draft: false
---

I recently had to spin up a NiFi container in docker and wanted to create a default state with a template and workflow
already present.

![Docker logo](docker-logo.png)

This post talks you through how to setup a Nifi docker container and automate the inclusion of a custom processor `.nar` file, an existing `template.xml` and a `workflow` in a running state.

This process is not too well documented by Apache so I hope someone finds this useful!

## Containerisation

A recent project required our team to collaborate on a proof of concept solution which included a web interface, a NiFi workflow and an Elastic backend.

To avoid each developer having to install and build the tools from scratch we opted to `docker-compose` the whole solution. Docker compose allows us to create a series of Docker containers which can easily talk to each other.

## Docker &amp NiFi

![NiFi logo](nifi-logo.png)

Apache has an official [docker image](https://hub.docker.com/r/apache/nifi/) for NiFi; you can use docker to run this image with a dockerfile like this.

```docker
FROM apache/nifi:latest

EXPOSE 8080
```

You can now run the image and access the NiFi Web interface on [localhost:8080](http://localhost:8080). This is great except docker containers are designed to be ephemeral and we don't want to have to manually add our template each time we run the container so we need a way to add our templates and state to the container.

## Adding a custom processor

To add a processor to NiFi you simply need to copy the `.nar` file into the correct location inside the container and run it.

The processors in NiFi live in `/opt/nifi/nifi-1.6.0/lib/` so you can use the docker `COPY` command to copy your processor in. The `dockerfile` below assumes that the processor is in the same folder as your `dockerfile`

```docker
FROM apache/nifi:latest

COPY our_processor.nar /opt/nifi/nifi-1.6.0/lib/

EXPOSE 8080
```

## Adding a template

The process for adding a template is the same as adding a processor but with different filetypes and locations.

```docker
FROM apache/nifi:latest

COPY our_process.nar /opt/nifi/nifi-1.6.0/lib/

COPY our_workflow.xml /opt/nifi/nifi-1.6.0/conf/templates

EXPOSE 8080
```

If you now run your container you should be able to use the NiFi web interface to add a new template and your template should be available to choose. This now means we can use our processor but we still have to use the web interface to get our container into a state where the NiFi workflow is running. We should automate that!

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




