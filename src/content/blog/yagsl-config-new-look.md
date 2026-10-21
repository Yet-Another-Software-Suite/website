---
title: "The YAGSL config generator has a new look"
sortDate: 2026-10-21
excerpt: "config.yagsl.com now matches yassrobotics.com and YAMG: graphite and Bright Fern green, the blueprint grid, the same fonts and the YAGSL logo. The Quick Start Guide has the new look too, and both pages fit a phone in portrait or landscape."
image: "yagsl-config-new-look"
imageAlt: "The YAGSL swerve drive config generator in its new look, on the Gyro tab, with a green pixel title and the YAGSL logo"
---

The [YAGSL swerve drive config generator](https://config.yagsl.com) has been restyled to match this website and [YAMG's new look](/blog/yamg-new-look).

![The config generator in its new look, on the Gyro tab](../../assets/blog/yagsl-config-new-look/01-hero.png)

It still makes the same configuration files. You fill in your gyro, your four modules and your robot's properties, then download them. The Quick Start Guide then walks you through using them in a new project.

## Before and after

Here's how it looked in the [YAMS and YAGSL 2027 alpha 7 post](/blog/yams-yagsl-2027-alpha7):

![The config generator before the restyle: white, with dark blue buttons](../../assets/blog/yass-2027-alpha7/yagsl-config-generator.png)

The new look uses the YASS website's design:

- **Colours:** dark graphite surfaces, with Bright Fern green for the buttons, the active tab, links and the edge of each card.
- **Fonts:** the page titles in a green pixel font, headings in Courier Prime, text in Inter, and buttons, tabs and code in JetBrains Mono.
- **The page:** the blueprint grid behind everything, and the green stripe under the header.
- **Corners:** square, with uppercase buttons and tabs.
- **The logo:** the header and the browser tab now show the YAGSL logo.

Each module's tab has the same look, with its drive motor, angle motor, absolute encoder, inversions and location grouped under their own labels:

![The Front Left module tab, with the drive motor, angle motor and absolute encoder settings](../../assets/blog/yagsl-config-new-look/02-module.png)

## The Quick Start Guide

The Quick Start Guide is still a checklist, now in the new colours. Each step you tick turns green and is struck through, so you can see where you are at a glance. Tabs you haven't reached yet show a lock until you get to them.

![The Quick Start Guide, with the first two steps ticked and turned green](../../assets/blog/yagsl-config-new-look/03-guide.png)

## Light mode and printing

Dark is now the default, like this website. The switch in the top corner still turns on light mode, and the site remembers your choice:

![The config generator in light mode](../../assets/blog/yagsl-config-new-look/04-light.png)

**Print** still prints on plain white paper, with no grid or dark background. You can keep a copy of your configuration and the guide's checklist in the pit.

## On your phone

Both pages fit a phone, in portrait or landscape. Wide code samples in the guide now scroll inside their own box instead of making the whole page wider than the screen:

![The config generator, the Quick Start Guide and a code sample in the guide on a phone](../../assets/blog/yagsl-config-new-look/05-phone.png)

## Feedback

The config generator is open source: [github.com/Yet-Another-Software-Suite/yagsl2027_config_generator](https://github.com/Yet-Another-Software-Suite/yagsl2027_config_generator). If something is hard to read or find in the new look, open an issue, or tell us on the [YASS Discord](https://discord.gg/yass).
