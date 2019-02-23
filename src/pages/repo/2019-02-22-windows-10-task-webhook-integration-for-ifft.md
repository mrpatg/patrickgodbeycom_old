---
templateKey: blog-post
title: Windows 10 task webhook integration for IFFT
date: 2019-02-23T03:30:01.108Z
description: >-
  OK Google, run batch task XXXXX. I have a lot of small batch processes that
  keep things running at home. Being able to manually run those with voice
  commands would be ideal. 
tags:
  - repo
  - todo
  - idea
---
Working to figure out a good simple server solution for monitoring IFTTT requests. Probably be a winter thing when I get bored. Web server + cron seems crazy. Maybe a node module. Needs to be easy to deploy for others and I just like stuff that can be torn down and rebuilt simply. I dont want to deal with running a server on the Win10 client due to DNS bullshit, so probably a 5 second checker on a remote service looking for flags set by the webhooks would be the best bet. If more than that use that to phone home with an IP and then run the server listening for requests, but an intermediary is more than likely going to be required.
