---
layout: post
title: Dual Bidirectional Bus Buffer
date: 2019-12-26 00:00 +0000
categories: [Engineering, Project]
tags: [electrical-engineering, pcb, eagle-cad, robotics, dexters-lab, dexterdixon]
image:
  path: assets/headers/dual-bidirectional-bus-buffer-header.png
  alt: Photo of a rendered dual bidirection bus buffer PCB
---
### Estimated Read Time: 1 minute

In 2019, I was on a team with two fellow engineering students at FAU, and we built an underwater robot for the MATE ROV competition. Initially, we planned on having all of our electronics on land, rather than being submerged in our robot. Unfortunately, because of this, we ran into a problem with our I2C sensors.


<div class="post-gallery">
  <a href="/assets/dual-bidirectional-bus-buffer/bus-buffer-trace.png">
    <img src="/assets/dual-bidirectional-bus-buffer/bus-buffer-trace.png" alt="Bus Buffer Trace in Eagle CAD" loading="lazy">
  </a>
  <a href="/assets/dual-bidirectional-bus-buffer/bus-buffer-render.png">
    <img src="/assets/dual-bidirectional-bus-buffer/bus-buffer-render.png" alt="Bus Buffer Render in Eagle CAD" loading="lazy">
  </a>
</div>

If you’re not familiar with I2C, it’s a serial communication protocol where data travels through one wire, SDA, and it allows for multiple slave devices. One downfall of using I2C would have been our need to decrease cable length since, with the increased capacitance from our long wire length, the data from our sensors wouldn’t be accurate.


To solve this, I made an I2C bus buffer board using Texas Instruments’ Dual Bidirectional I2C Bus and SMBus Repeater to solve this. Although, in the end, we opted to place our electronics inside our robot, I still got the chance to learn a great deal about making the board. All of the project files are on my GitHub.
