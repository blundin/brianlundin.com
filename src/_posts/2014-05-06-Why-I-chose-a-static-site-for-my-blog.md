---
layout: post
title: Why I chose a static site for my blog
date: 2014-05-06
description: I chose Jekyll and Amazon S3 + Cloudfront to host this blog as a static site. In this blog post, I explain why.
categories: technology
---
When I decided to launch [code.brianlundin.com](http://code.brianlundin.com) I had some firm requirements in mind for the site and blog engine I'd use. Things like:

* It must be responsive
* It must be fast
* It must be cheap
* It must have an easy to use workflow for writing and publishing posts in [Markdown](https://daringfireball.net/projects/markdown/basics)
* I must have full control over the layout, design and code of the site, and use the responsive framework of my choice
* It must be fun to develop and maintain

I don't think this list is the same for most bloggers on the internet, but I bet other developers' lists would look pretty similar. Of course, the real question is how I decided on a static site, and [Jekyll](http://jekyllrb.com) as the engine.

Choosing a static site was easy. I've ran several WordPress blogs in the past, both self-hosted and on Wordpress.com, and overall I was happy with them. The amount and quality of features you get for a low price is a great deal. Plus, there are so many plugins and community tools for the platform that if you are choosing a blogging platform from scratch, it's the easy choice.

But I didn't want to take the easy choice with this site. The first reason is that it would be overkill. This site is simple. It's a blog, a few pages, and an RSS feed. All of the features of the Wordpress platform are great, but they would go unused for this site. That's too much unhelpful complexity.

In fact, the only thing that the Wordpress option had going for it in my mind was the tremendous SEO capabilities of Studiopress's [Genesis Framework](http://my.studiopress.com/themes/genesis/), which I have used and recommend. But, after some time playing with [Google's Webmaster Tools](https://www.google.com/webmasters/tools/home) and reading the specs at [Schema.org](http://schema.org), it was apparent that I could easily optimize my own HTML.

The second reason I did not want to go with Wordpress, or its competitors, is a reason that I suspect only other developers will understand. Simply put, I am disconnected from the code that runs my [other current site](http://brianlundin.com). While I am not familiar with PHP, it's not that hard to pick up. But sorting through the Wordpress code, and then the Genesis Framework theme code, is just too much for a side project. I could learn it, but it's so far outside of my wheelhouse that even if I developed a good child theme, I wouldn't be happy. For this project I want to be more directly involved. I want the site my readers see to be *my* site, *my* code.

Which led me to my first effort, creating my own CMS in Rails. A Rails app would satisfy most, if not all, of my requirements. Ruby and Rails are fun, and I know I can make a performant app. Obviously the code and design would all be mine. I started working on the project, and had a good time with it.

For a few hours.

Then I realized the downside of this plan. I have a job, and it's not building a blog engine. Sure, it's fun and a great way to learn and find some cool ways to solve new (to me) problems, but it was clear I would never finish on a reasonable timeline, much less when I wanted to.

Additionally, I did not want to run a server somewhere in the cloud. Cloud VPS providers make life easy, and I've had good experiences, but that's not how I want to spend my time just to run a blog. Heroku could make that much easier of course, but that still felt like a bit too much. So in the end I passed on building my own.

All of this left me with [Jekyll](http://jekyllrb.com). After a short bit of time googling for hosting options I saw how easy it was to host a static site on Amazon S3 and use Cloudfront. With this solution in mind, Jekyll had several key things going for it:

* Jekyll is written in Ruby, so if I need to hack away at it, I can
* The code runs on my machine, not the server. If I want to make a bunch of changes, tear apart the site and rebuild it, there is no adverse affect on my site. Most blogging engines cannot say the same thing without a whole lot of work and configuration
* Backing up both my site code and my content would be a snap with [Github](https://github.com/blundin/code-blog)
* Integrating responsive frameworks, JavaScript libraries, and anything else would be easy
* I control the published site code 100%

This list of benefits won the day. The fact that I can host it on S3 and cache my content globally with Cloudfront for next to nothing was just a bonus.

This choice proved to be very good for me. Setup and configuration time was minimal, with the majority of work going into the design and development of the site—which is exactly how I wanted it. Honestly, it's been a breeze, and fun.
