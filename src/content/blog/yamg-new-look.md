---
title: "YAMG has a new look"
sortDate: 2026-10-21
excerpt: "YAMG now matches yassrobotics.com: graphite and Bright Fern green, the blueprint grid, and the same fonts. The form is easier to scan, and the brake mode switch says Brake or Coast."
image: "yamg-new-look"
imageAlt: "YAMG in its new look, generating an arm, with green form sections and the generated code in a graphite panel"
---

[YAMG](https://yamg.yassrobotics.com) (Yet Another Mechanisms Generator) has been restyled to match this website. It now looks like the rest of YASS, including the [YAMS Live Tuner](https://tuning.yassrobotics.com).

![YAMG in its new look, generating an arm](../../assets/blog/yamg-new-look/01-hero.png)

Nothing about the code it generates has changed. The same form gives you the same code, and share links you've already posted still open the same mechanism.

## Before and after

Here's how it looked last week, in the [YAMG 2027 post](/blog/yamg-2027):

![YAMG before the restyle: black, white and grey](../../assets/blog/yamg-2027/01-hero.png)

The new look uses the YASS website's design:

- **Colours:** dark graphite surfaces, Bright Fern green for the things you act on, and YAMS blue along the edge of the code and simulation panels.
- **Fonts:** headings in Courier Prime, text in Inter, and code and labels in JetBrains Mono, with a small pixel YAMG wordmark at the top.
- **The page:** the blueprint grid behind everything, and the green stripe under the header.
- **Corners:** square, with uppercase buttons, like the cards on this site.

## A form that's easier to scan

The form is long, so it's now easier to find your way around. Every section (Motor Configuration, Control Configuration, Telemetry, Homing and the rest) and every group inside one (Ramp Rates, Current Limits, PID Values, Feedforward and so on) has a green heading, larger than the field labels under it. The top of the form, where you name the mechanism and pick its type, has a green edge.

![The Motor Configuration section, with green section and group headings above the fields](../../assets/blog/yamg-new-look/02-form.png)

## Brake or coast

The brake mode switch now says what it does. It reads **Brake** when it's on and **Coast** when it's off, so you don't have to remember which way round it goes:

![The brake mode switch, reading Brake when on and Coast when off](../../assets/blog/yamg-new-look/03-brake-coast.png)

## The code and the simulation

The generated code sits on a graphite panel in JetBrains Mono, with the same syntax colours as before.

The simulation has the new colours too. On the graph, the measured angle (or height, or speed) is green, the setpoint is yellow and the stator current is red. The mechanism's current and target markers match the graph. Here a NEO at 60:1 moves an arm to 60°, down to 15° and back up to 45°:

![YAMG simulating an arm moving between angles, with the angle in green and the setpoint in yellow on the graph](../../assets/blog/yamg-new-look/04-simulation.png)

## On your phone

The phone layout is the same as before, with the inputs, the code and the simulation on their own tabs, in the new look:

![YAMG on a phone, with the Inputs, Generated Code and Simulation tabs](../../assets/blog/yamg-new-look/05-phone.png)

## Still on 2026?

The 2026 version at [yamg.yassrobotics.com/2026](https://yamg.yassrobotics.com/2026/) keeps its old look for now. Use the WPILib 2026 / 2027 switch in the top corner to swap between them.

## Feedback

YAMG is open source: [github.com/Yet-Another-Software-Suite/yamg](https://github.com/Yet-Another-Software-Suite/yamg). If something is hard to read or find in the new look, open an issue, or tell us on the [YASS Discord](https://discord.gg/yass).
