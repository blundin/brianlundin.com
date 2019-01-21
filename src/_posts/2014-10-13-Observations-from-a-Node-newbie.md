---
layout: post
title:  Observations from a Node newbie
date: 2014-10-26
description: Some of my observations after a few months of working with Node
categories: technology
---
It's been a few months since I started playing around with [Node.js](http://nodejs.org), and in the last few weeks I started writing my first [full application in Node](https://github.com/blundin/observer). I've found myself really enjoying it, even if I have not figured out all the nooks and crannies yet.

In this time I've come to realize that Node is very different than other languages/frameworks I've coded in. Most of these differences impressed me, but some of them led to quite a few frustrating moments. This list below is a subset of my observations of a few months of working with Node—all just my personal opinions, of course.

* Everything in Node just feels, well, *fast*. Most of my web development work lately has been with Rails, and I know this probably feeds into the old stereotypes of Ruby, but Node feels faster. Not that Ruby is slower actually,  but Node feels lightning quick
* Everything about Node is flexible. Because of the nature of Node and its implementation, it is incredibly flexible. Even within most of the established frameworks it is incredibly easy to write your application exactly as you want it. In many ways Node feels like the dream of those who love higher level languages. Throw the right npm modules into your package.json, and off you go
* Everything about Node is almost *too* flexible. For good or for bad, it feels like I can do anything I want. From reading blogs and other community discussions, it seems like there is not yet a "Node way" in all but the most fundamental aspects of the language
* It's still JavaScript. I don't mean that solely as a knock. Much of the power and flexibility of Node comes from the language underneath it. But, all the things about JavaScript that bug me are still there, and they still bug me. But there is enough value in the whole package to make it worth it. To like it even
* Asynchronous, event-driven programming is a great fit for the server side. Especially for APIs. Today, I would't pick a different tool
* [YMMV](http://www.urbandictionary.com/define.php?term=ymmv), but for me the community is still coalescing, and there is not yet a consensus on the "Node way" for many things yet. One of the things I earnestly love about Rails is the fact that the community has a cohesive point of view on how to use the framework. You don't have to follow it, but it makes discovering and adopting best practices easy, which is good for the coder and their users
* I have not found the right way for *me* to do TDD in Node yet. Maybe it's a lack of tools, or maybe I just haven't found what works for me, but testing is very important for me and I'm not yet comfortable
