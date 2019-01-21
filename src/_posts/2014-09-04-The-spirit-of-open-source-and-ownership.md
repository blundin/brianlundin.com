---
layout: post
title: The spirit of open source and the question of ownership
date: 2014-09-04
description: Trying to claim a "standard" that is divorced from the original spec is not.
categories: technology
---
**Update**: *Jeff Atwood and company have updated the name to 'CommonMark' in consultation with John Gruber. My thoughts below the original post.*

Today Jeff Atwood (I'm a fan) and a working group announced a new fork of Markdown (which I am writing in, on a keyboard Atwood designed), a text markup language created by John Gruber (also a fan, a big fan)[^1]. They created [a new spec](http://jgm.github.io/stmd/spec.html), intended to remove the ambiguity of [Gruber's original spec](http://daringfireball.net/projects/markdown/syntax), and a standard set of test suites. They call it "[Standard Markdown](http://standardmarkdown.com)."

They created this new project without Gruber's involvement, and it looks like [without his blessing](https://twitter.com/markdown/status/507341395137658880)—both of which are just fine in the open source world. I haven't read the new spec in detail yet, and I think the standard tests are a *great* idea. This project was clearly conceived with a clear purpose because of a felt need. I think this is a good idea in many ways.

But the name is terrible. "Standard Markdown" is absolutely the wrong name for this project. And this isn't nit-picking either, the name is so bad it casts a pall over the whole project.

First, reusing the name Markdown is a poor choice. I understand that we are all tired of "X flavored Markdown" as naming approach, but using the name Markdown on a fork of the syntax clearly marks this effort as trying to take the place of the original spec. It's unnecessarily aggressive.

But beyond using that familiar moniker for the project, the team went a step further and claimed the mantle of "Standard." This decision cannot be interpreted in any way other than an attempt to wrest ownership of the thing called Markdown from the guy who invented it. It's an overly bold move, full of hubris.

I'm an open source proponent, but just not a [Stallmanist](http://en.wikipedia.org/wiki/Richard_Stallman)[^2]. I affirm this team's right to take the Markdown language and syntax and make it better. I affirm the right of others to take that and use it instead of Markdown. That would be a good thing, in fact that is how technology advances. So don't misread me, I'm in favor of this project existing.

But don't call it Markdown, and certainly don't call it "Standard Markdown." Claiming something new to be a "Standard" version of an existing open source project is poor form. Gruber created the Markdown syntax and its first parser, he claimed a copyright, and released it to the world. It is open source. It has been built on, modified and extended well beyond its original incarnation. That's all well and good. In a real sense, Gruber has a form of ownership over both the Markdown default implementation and syntax, open source though it is.

The chosen name for this project seems to reveal the intentions of the team behind it: take over the intangible ownership of a successful idea, and it's brand, without the permission or help of the creator. Building on top of Gruber's work is a good thing, it's a great example of the open source ethos. But trying to claim a "standard" that is divorced from the original spec is not.

The fix is simple. Keep the new spec. Keep the test suite. Keep all the good work that moves Markdown forward. But change the name. It's not the "standard" Markdown, and calling it that is dishonest.

**Updated**

[On the second try](https://twitter.com/codinghorror/status/508027568839479297), the project formerly known as "Standard Markdown" was renamed to "CommonMark." [First the renamed it to Common Markdown](http://blog.codinghorror.com/standard-markdown-is-now-common-markdown/), and that names holds many of the same issues as the first.

Ultimately, this is the right outcome. There was lots of back and forth on Twitter between Atwood and Gruber, and of course their respective teams, and it looks like the name contention was eventually resolved in private.

In the end, this is the right solution. Given the people and platforms involved, there was no chance this would be resolved completely behind the scenes, but this result is good for all involved. Certainly CommonMark is not the best name ever, and some time spent thinking about alternative could result in something better, but it works. I'm glad the team decided to change the name, and I'm glad the web has a strict Markdown implementation. In fact, I'll be investigating the test suite myself.

[^1]: This is a weird perfect storm of fandoms and respect. I've got so many horses in this race I think it all evens out. I have so many conflicting biases, I feel unbiased.
[^2]: To be honest, I don't even know what his opinion on this would be. I just think of him as the far-out open source radical. I bet he'd just think we're all a bunch of sell outs. Which is cool, and maybe right. ;)
