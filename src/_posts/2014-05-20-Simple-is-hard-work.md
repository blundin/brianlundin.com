---
layout: post
title: Simple is hard work
date: 2014-05-20
description: Simple is not easy, and mixing up the two creates real problems when working on large systems.
categories: technology
---
When solving any problem, we tend to look to the simple answers first. This is a good response, and one that should be nurtured. But can easily be misled by that simplicity. This typically happens in two ways. First, we think the simple answer means less time than other answers. We tend to equate *simple* with *fast*. Second, we assume that a simple answer is easy to implement. We assume that what is easily understood can be easily done. We equate *simple* with *easy*. As a result, we often misunderstand the impact of a simple answer to a hard problem. Because, truthfully, simplicity is hard work.

Let me make this more concrete. Take the idea of a microservices architecture, something I have been thinking about a lot lately. The  [microservices architecture](http://martinfowler.com/articles/microservices.html) is "an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API."

This is a simple idea. In fact, most laymen will be able to grasp it with about 10 minutes of explanation, and IT professional should be able to grok it in a matter of minutes. The idea is straight-forward and elegant. Break a single system down into multiple, small systems. Put application logic into the services, not the data or transport layers—"smart endpoints and dumb pipes" as Martin Fowler puts it. Call the services asynchronously, and run each of them independently. The concept is not complicated.

But implementing this idea is hard work. How do you deal with decentralized data stores? How do you coordinate operations between services without tightly coupling them? What about managing API documentation? Automated testing and deployments on multiple frameworks or platforms? All of these questions sit squarely in the middle of the microservices concept and must be answered.

With all of those questions in mind, is the idea still a simple one? I'd say so. The idea is still clear and easy to understand. But it doesn't look easy now, does it?

One of the best lessons a good developer or architect should learn is how to continually ask the question, "then what?" Always push to the next question, to the next decision. Consider each one fully in turn, and then in light of the whole. You cannot be satisfied with the simple, obvious answer if you cannot work through all of its consequences. Don't be fooled, in the software world simple is never easy. It's hard work.
