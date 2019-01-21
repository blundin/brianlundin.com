---
layout: post
title: For software, stasis equals death
date: 2014-05-27
description:  The idea that software is ever "done" can be really dangerous. For developers of modern software, products are either under active development or they are dying.
categories: technology
---
"Stasis equals death." I picked up this phrase from [a really good book on screenwriting](http://www.amazon.com/gp/product/1932907009/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1932907009&linkCode=as2&tag=blundin-20&linkId=U4PQO5FXWVI6QZFO), and found that it absolutely applies to the software development world. It applies because it is utterly true. For developers of modern software, products are either under active development or they are dying.

This dynamic was clear in Apple's transition last year to iOS 7. Within a few weeks of the update, most of the top apps were updated to the new look, and those developers that didn't felt heavy pressure from their users. Look at anyone's iPhone home screen months later and there are likely no iOS 6 apps on it.

The apps that were not updated now feel old. They still work as intended, but they no longer meet the expectations of their users, and as a result, they might as well not exist.

In the world of traditional enterprise software we see the same issues. Projects to develop or enhance an application finish, the operations team is (hopefully) trained, and the development team moves on to the next project. Sometimes on the same application, sometimes not. Either way, the project in production might as well not exist to the developers unless it breaks. After all, they have the next big project to worry about. The application enters stasis.

This leaves the users out in the cold. If they have changes for the application or issues that they need fixed, they must submit their issues to the ops team and feature requests to the product manager, or the roadmap committee, or whatever bureaucratic madness the governance folks can cook up. The timeline on addressing those requests then tend to run in months, not days. Even good software at this point starts to feel old, and broken.

It's not just the users who are left out, either. As requests for work on the app stack up, and the next big project holds all the attention, a technical debt stacks up on the application in production. The issues may not be visible to the project team, or they may be known but "de-prioritized" in favor of the existing roadmap. Either way, this team runs a very real risk of launching a new iteration of the product that is even further away from what the users actually want and need. Even scarier is this simple fact: the longer these projects take to complete, the farther away they can stray from the users' actual needs.

I know, right now you're shaking your head and thinking, "It's a good thing I don't have this problem, because we are Agile." Well, you might be right. Maybe.

[Agile as a idea](http://agilemanifesto.org) is a good one, maybe even the right one. But 'Agile' as sold by consultants and book publishers is not always the answer. There are a lot of people who will disagree with this, but it's usually because they are selling Some Agile Way™.

Agile is nothing more than a set of ideas, ideas that build a culture. [Merlin Mann talks about this concept in the latest episode of Back to Work](http://5by5.tv/b2w/173), but the culture you create will define every aspect of your organization. Adopting Agile methodologies can help, but only if you are committed to building a culture that really believes in the *idea* of agile. Either way, and agile approach will not solve our problem by default.

So our problem remains. How do you avoid software stasis? By focusing your work on the product and not the project. [This idea is not new](http://martinfowler.com/articles/microservices.html#ProductsNotProjects), but it should be reconsidered by most of the software development world. Your primary concern should not be the project, but it should be the application.

There are many implications of these ideas, but product ownership can be implemented through a few simple concepts:

* Organizing development teams by product. Each application or service has it's own dedicated team
* Tracking and scoping requirements by product, not project. For strategic initiatives you certainly need to have some mapping of the initiative's requirements to the product requirements, but the system of record should be at the product level
* Projects will come and go, but the product teams endure, as does the product feature and fix backlog
* The product team must really own the product, and be in a direct relationship with it's users.
* The development process must trust the team with ownership of the product

This breaks applications out of stasis. In this model, the product is never "done," it evolves. With the team and work focused around the product the developer and his users can really own and drive the product forward together, without the long lag times of the project focused timeline. It puts the software and its use at the center of development activities.

This idea does not solve all the problems of a dev team. Like all things in life there is no silver bullet. But by viewing products as the key organizing factor, an organization can focus on the constant changes required to keep up with users evolving needs and demands. Isn't that, after all, the key mission of a development team?
