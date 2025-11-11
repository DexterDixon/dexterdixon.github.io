---
layout: post
title: 'Project HiFi: Managing a Network'
date: 2020-10-14 00:00 +0000
categories: [Networking, Engineering, Project]
tags: [networking, ubiquiti, unifi, dexters-lab, dexterdixon]
description: How I designed a large-scale network using Uqiquiti's ecosystem!
image:
  path: assets/headers/project-hifi-header.webp
  alt: Photo of gray city with Ubiquiti logo and devices overlaid with post title
---
### Estimated Read Time: 3 minutes

## Project HiFi

Project HiFi (projectHiFi.org) is an initiative to install infrastructure in low-income communities that make it possible to deliver high-speed internet for free. Project HiFi hopes to help those affected by the digital divide, especially with the gap widening due to COVID-19. Currently, we have finished the cabling and device installations for our first community Dixie Manor Apartments in Boca, a 96 unit community, with just a few more tasks to check off our to-do list. As we finish up at Dixie Manor, we are preparing our next job at Boca Island East, a 50 unit apartment complex, both of which are a part of the Boca Housing Authority.

## My Role

For this project, my job has been that of a network engineer/architect. My responsibilities have included planning out the install, testing out network equipment for feasibility, supervising the cable and device installations, configuring the network, and troubleshooting software and/or hardware issues.

## The Network

We have been taking advantage of the Ubiquities product line, leveraging the use of the cloud management system that it offers to enable remote support. Here is a list of devices that I have configured so far and their purpose in our network.

### UniFi® Cloud Key Gen2 – 1
This device allows us to connect to our Ubiquiti devices through the Unifi controller cloud software. Additionally, all of the devices that we are using can be accessed, monitored, and configured through the cloud management software.

### Unifi Mesh – 10
These Ubiquiti devices are placed throughout the community to offer a guest network to be used in public areas. Additionally, these are used for redundancy if there is a problem with one of our connection paths. These devices are placed to allow them to mesh with each other to share internet connectivity with one another. To prevent network loops when we take advantage of rapid spanning tree protocol (RSTP) on our switches.

### AirCube – 116
This is a Ubiquiti router solution. These are what have been put inside each of the apartments and are powered by the 150w 8-port switches, receiving 24v passive.
 
### UniFi® Switch 8-150W – 20
This is Ubiquiti’s 8 port switch that offers 150W PoE, and the eight Gigabit Ethernet ports offer 802.3af  PoE+ or 24V passive PoE, and two SFP ports. We use these switches in maintenance closets throughout the community to route traffic to and power our AirCube devices with 24v passive.

### UniFi® Security Gateway – 1
This is Ubiquiti’s gateway that we have chosen to use. All of our internet traffic gets routed through this device.

### NanoBeam® AC Gen2 – 6
This is a Ubiquiti product that acts as a point-to-point or point-to-multipoint bridge. We use these in areas where we could not lay cable underground, e.g., across a road.

### Unifi Industrial Switch – 1
This is similar to Ubiquiti’s 8-port switch, except this is 450w. We use this as the switch that all of the traffic passes through to reach our gateway.

### UniFi® Switch Flex – 5
These are POE-powered switches that we use to help route traffic throughout the community.

### UniFi® Dream Machine Pro – 1
This is Ubiquiti’s all-in-one 8-port Gigabit switch that combines all of Unifies applications into one, including the Security Gateway and Cloud Controller. This is the gateway that we will be using at Boca Island East, our next project location.

### UniFi® Switch 16 PoE Gen2 – 4
This is a configurable Gigabit Layer 2 switch with sixteen Gigabit Ethernet ports, including eight auto-sensing 802.3at PoE+ ports, and two SFP ports. We are planning on using this at our next install location, Boca Island East.

## What’s Next?
Next, we will be working on the installations at Boca Island East. For this location, we will also be installing a camera system for the Boca Housing Authority. If we continue to receive funding for our projects, we can scale and continue installs in more low-income communities.
