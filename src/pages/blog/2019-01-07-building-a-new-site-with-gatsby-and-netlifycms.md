---
templateKey: blog-post
title: Building a new site with Gatsby and NetlifyCMS
date: 2019-01-07T06:13:24.582Z
description: This is gonna be fun.
tags:
  - blog
  - gatsby
  - netlif
---
This is not fun. Just kidding. Well, sort of.

Coming from what I will call WordPress-Privilege, it's been stupid easy to point, click, mash some buttons, and have a full site up and running in minutes. So it's a bit of a jump for me to switch to using not just a non-php based blogging system, but it's also using a static site generator called Gatsby, which is also using NetlifyCMS to manage the posts/pages, deploying and building from github commits, and I have very little experience using react. So, to say I am out of my element is an understatement. However, some hunting around, fiddling with the code, and several failed builds later, I think I get it.

**First Thing I Did**

So the first thing I wanted to do, was mimic a feature of my WordPress static site, which was a "repo" for snippets, or ideas, or whatever. Basically a site-contained twitter that could be blurbs, ideas, or code to use later. In WordPress, this was simple as using custom post types, and advanced custom fields to setup the meta interface and like that, you are off to the races. 

Well in Gatsby and NetlifyCMS, it is a little more complicated. Editing the config.yml (for NetlifyCMS) in the demo project I started with, yielded some clues. Instead of "post-types", we have collections. Which is a more universal name for the idea of a grouping or _collection_ of data (read: posts), but I'm still drawing the analog to WordPress here so bear with me. So I copied that whole block of settings, duplicated it, and change the names. In doing so I discovered the folder path, which didn't exist yet. So That was clue #2, had to create a folder. Since my collection would mimic the blog, I needed to mimic it's layout. Unfortunately the template came with initial blog posts, but no dedicated "blog index" (more on this later), so I was unsure how to display a page with just my custom collection.

**Second Thing I Did**

Look at the site, look at the code, look at the CMS, now look back at me. The blog posts were being displayed on the index page, so naturally I should be able to copy that page and use the code (albeit modified) to display my collection elsewhere. Bunch of stuff here, lots of react specific features that I had no clue what I was looking at. I went carefully, block by block, read it, try to gather a context of what was going on, and change what needed to be changed based on my custom collection naming scheme.

**Third Thing I Did**

So after I broke the build a few times trying to load two collections on one page, I decided to go about this another way. I don't know enough about react to try an advanced GraphQL query and parsing those results, but I can just mimic the page into a second, stand alone page, and get that working. Trial and error later, I've learned that even on two different pages, you cant have two GraphQL queries named the same thing. Outside of that, it's pretty simple. I mean, _simple_ as in, easy to glean what you need to know to get it to work from the context. 

**Conclusion**

As it stands right now, Ive changed the logo, added a collection, a page, changed the sass variables, and familiarized myself with the directory structure. I'm still a ways off from being able to build a whole site from scratch, but I don't think I am far off from ripping the guts out of this template and replacing it with my own design/layout, which will be my next challenge. I see lots of image variables going on and am curious to learn more about that and how layouts work with react.
