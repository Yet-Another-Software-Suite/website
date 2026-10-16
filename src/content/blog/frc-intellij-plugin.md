---
title: "We're taking on the FRC IntelliJ plugin"
sortDate: 2026-10-03
excerpt: "The FRC plugin for IntelliJ IDEA works with IntelliJ IDEA 2026.2 again. We're maintaining it now, and 6.0.2 is out with simulation, profiling and Gradle JVM fixes."
logoHeader: true
---

If your team writes robot code in IntelliJ IDEA, you've probably used the FRC plugin. It creates WPILib projects, adds the deploy, simulate and debug run configurations, and keeps the Gradle setup pointed at the WPILib JDK. It was written and maintained for years by Mark Vedder ([Javaru](https://gitlab.com/Javaru/frc-intellij-idea-plugin)), and a lot of teams owe it a lot of saved time.

It hadn't kept up with recent IntelliJ releases, so we've picked it up. Our fork lives at **[github.com/thenetworkgrinch/frc-intelij-plugin](https://github.com/thenetworkgrinch/frc-intelij-plugin)**, and today we're releasing **[6.0.2](https://github.com/thenetworkgrinch/frc-intelij-plugin/releases/tag/v6.0.2)** for IntelliJ IDEA 2026.2.

## What's in 6.0.2

- **It runs on IntelliJ IDEA 2026.2.** We moved it off the plugin APIs JetBrains has deprecated or removed, and fixed a race condition when the plugin loads its JSON files.
- **The Gradle JVM is set for you.** The plugin finds the WPILib JDK and sets it as the project's Gradle JVM, so you're not left building with whatever JDK IntelliJ picked.
- **Simulation for 2026 projects.** The simulation run configuration works with 2026 projects, and the robot's `Main` is found from the Gradle root project, so it works when your robot project isn't the folder you opened.
- **Profiling and coverage in simulation.** Run the simulation with IntelliJ's profiler or with code coverage, the same as any other Java run configuration.
- **Remote profiling on the robot.** Deploy with Java Flight Recorder turned on and profile the code that's really running on the robot.

## Installing it

The plugin isn't on the JetBrains Marketplace under our name yet, so you install it from the GitHub release:

1. Download `FRC-6.0.2-2026.2.zip` from the [release](https://github.com/thenetworkgrinch/frc-intelij-plugin/releases/tag/v6.0.2). Don't unzip it.
2. In IntelliJ IDEA, open **Settings ▸ Plugins**, click the gear icon and choose **Install Plugin from Disk…**
3. Pick the zip and restart the IDE.

If you have the original FRC plugin from the Marketplace, uninstall it first (**Settings ▸ Plugins ▸ Installed ▸ FRC ▸ Uninstall**). The release notes also cover installing it by copying it into the plugins folder, and checking the download's SHA-256.

## What's next

We'll keep it working on new IntelliJ releases, and keep its project templates up to date with WPILib through the 2027 season. We'd also like it to help C++ teams, not just Java ones.

## Feedback

If something doesn't work, [open an issue](https://github.com/thenetworkgrinch/frc-intelij-plugin/issues) with your IntelliJ version and what you were doing, or find us on the [YASS Discord](https://discord.gg/yass).
