---
layout: post
title: ShiftBoard
date: 2018-08-15 00:00 +0000
categories: [Engineering, Project]
tags: [electrical-engineering, prototyping, microcontroller, load-cells, dexters-lab, dexterdixon]
image:
  path: assets/headers/shiftboard-header.jpg
  alt: Photo of ShiftBoard Prototype
---
### Estimated Read Time: 2 minutes

We created the ShiftBoard, which is a weight-sensing electric skateboard with assisted navigation.

Electric skateboards are a relatively new technology that is rapidly increasing in popularity. Currently, there is not a wide range of available products on the market. In addition, many of the electric skateboards that are available right now use an RC-like controller that the rider uses to operate the board, which is not intuitive.Having a true weight-sensing electric skateboard, using the weight distribution of a person’s body, on the skateboard will let users have the natural feeling of riding, while also being hands-free.Through the WAVE program at FAU, we’ve received funding to start developing a prototype for this idea. After the WAVE program, we became members of FAU Tech Runway, a business incubator, participating in Venture Class 6. At first, we wanted to test out the concept to see if it would work. For our first prototype, we used:

- Arduino Mega microcontroller
- A generic load cell sensors
- Vedder’s open-source electronic speed controllers
- Vedder’s open-source battery management system
- 40 18650 battery cells

After successfully building and testing our first prototype, we immediately began working on our second design. With this second design, we designed our own load cells that we would place at both ends of the board. We then designed a flexible PCB, printed circuit board, to place on the bottom of the load cells creating our own load cell sensors. Finally, to replace our Arduino Mega, we designed a custom microcontroller using an STM32 chip, Bluetooth module, two step-down converters, a gyroscope.

Our board will be able to detect the distribution of a uses weight. When the user shifts their weight forward or backward, the board will respond to this difference by either accelerating or using regenerative braking to decelerate, eliminating the use of a remote and helping the user power through turns by sensing when the user is making sharp turns.
Currently, this is still a work in progress, and our next design goals are to create our final deck design, make a removable battery pack, and start development on our phone app.

<div class="post-gallery">
  <a href="/assets/shiftboard/shift-board-load-cells.jpg">
    <img src="/assets/shiftboard/shift-board-load-cells.jpg" alt="Image of assembled load cell sensors on deck" loading="lazy">
  </a>
  <a href="/assets/shiftboard/shift-board-deck-prototype.jpg">
    <img src="/assets/shiftboard/shift-board-deck-prototype.jpg" alt="Image of finished deck prototype" loading="lazy">
  </a>
  <a href="/assets/shiftboard/shift-board-wood-glue.jpg">
    <img src="/assets/shiftboard/shift-board-wood-glue.jpg" alt="Image of wood for deck being glued  together" loading="lazy">
  </a>
  <a href="/assets/shiftboard/shift-board-battery-pack.jpg">
    <img src="/assets/shiftboard/shift-board-battery-pack.jpg" alt="Image of ShiftBoard Battery Pack" loading="lazy">
  </a>
  <a href="/assets/shiftboard/shift-board-battery-pack2.jpg">
    <img src="/assets/shiftboard/shift-board-battery-pack2.jpg" alt="Image of ShiftBoard Battery Pack" loading="lazy">
  </a>
  <a href="/assets/shiftboard/shift-board-battery-pack3.jpg">
    <img src="/assets/shiftboard/shift-board-battery-pack3.jpg" alt="Image of ShiftBoard Battery Pack" loading="lazy">
  </a>
  <a href="/assets/shiftboard/shift-board-construction.jpg">
    <img src="/assets/shiftboard/shift-board-construction.jpg" alt="Image of ShiftBoard Assemply" loading="lazy">
  </a>
  <a href="/assets/shiftboard/shift-board-render.jpg">
    <img src="/assets/shiftboard/shift-board-render.jpg" alt="Image of deck render" loading="lazy">
  </a>
  <a href="/assets/shiftboard/shift-board-3d-printer.jpg">
    <img src="/assets/shiftboard/shift-board-3d-printer.jpg" alt="3D Printing Load Cell Housing" loading="lazy">
  </a>
</div>