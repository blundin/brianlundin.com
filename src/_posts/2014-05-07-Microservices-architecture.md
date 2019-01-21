---
layout: post
title: Microservices architecture
date: 2014-05-07
description: Martin Fowler on microservices architecture.
link: http://martinfowler.com/articles/microservices.html
categories: technology
---
Martin Fowler on the evolving practice of developing Microservices:
> In short, the microservice architectural style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies.

He goes to describe this new this evolving approach at length, and I strongly recommend it.

The most interesting part about this piece may be the most basic. His definition of a 'component', the building blocks that comprise a microservices architecture, is "a unit of software that is independently replaceable and upgradeable." Why is this so interesting? Because in my experience, most enterprise software systems do not think in units this small. In fact, many *cannot* think this small. Which is why so many are behind the curve in so many ways.
