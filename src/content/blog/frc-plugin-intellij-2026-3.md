---
title: "The FRC plugin works with IntelliJ IDEA 2026.3"
sortDate: 2026-11-12T21:00:00Z
excerpt: "FRC plugin 2026.6.7 is out for IntelliJ IDEA 2026.3. The RioLog console is now the SystemCore Console: it connects to the SystemCore, starts when you deploy, and no longer eats a CPU core."
logoHeader: true
---

The FRC plugin's **[2026.6.7](https://github.com/thenetworkgrinch/frc-intelij-plugin/releases/tag/v2026.6.7)** release is out, and it works with **IntelliJ IDEA 2026.3**. If you've updated IntelliJ, update the plugin with it.

## The SystemCore Console

The RioLog console is now the **SystemCore Console**, and most of this release is about making it work properly.

- **It doesn't eat a CPU core any more.** On recent IntelliJ versions the console filled up with garbage and kept a whole CPU core busy, even when nothing was connected. That's fixed.
- **It connects to the SystemCore.** It tries the same addresses as the WPILib 2027 VS Code extension, and asks the 2027 Driver Station for the robot's address. 2026 robots still work.
- **No team number needed.** A SystemCore can be reached without one, so the console connects anyway instead of refusing to start.
- **It starts when you deploy.** When a deploy succeeds, the console starts and comes to the front, like `autoStartRioLog` in VS Code. That works for the plugin's deploy run configurations and for the deploy task in the Gradle tool window. If you'd rather it didn't, turn off **Start on Deploy** on the console's toolbar.
- **It stays out of your way.** Opening a project no longer pulls focus away from the editor, and the console doesn't reopen after you close it.
- **Reconnecting works.** A lost connection is now noticed after a reconnect too, it waits 3 seconds between rounds of failed attempts, and it closes the connections it doesn't use.

The tool window has a new ID, so its position and size reset once in projects you already have open.

## Other fixes

- **Projects with an `.idea` folder open properly.** If a WPILib project came with an `.idea` folder, or IntelliJ lost its cache after a crash, IntelliJ thought the project was already imported and never synced it. The Java files weren't recognized and the project JDK wasn't set. The plugin now syncs it for you, after it sets the Gradle JVM to the WPILib JDK.
- **Profiled simulations show their results.** When a simulation you ran with the profiler ends, the **Profiler** tool window comes to the front with the results.
- **The FRC settings page loads.** A build tool update broke it in 2026.6.6, so skip that version and go straight to 2026.6.7.

## Also new since the CLion beta

If you haven't updated since the [CLion beta](/blog/frc-plugin-clion), 2026.6.5 also added:

- **2027 project templates** in the New Project wizard, in Java and Kotlin.
- **The simulation run configurations are Gradle run configurations**, so they run the same Gradle tasks as the command line.
- **The WPILib 2027 install is found on Linux**, in the XDG data folder.
- **A warning in the Vendordeps tool window** when your project's year doesn't match its GradleRIO version.

## Installing it

1. Download `FRC-2026.6.7-2026.3.zip` from the [release](https://github.com/thenetworkgrinch/frc-intelij-plugin/releases/tag/v2026.6.7). Don't unzip it.
2. In IntelliJ IDEA 2026.3, open **Settings ▸ Plugins**, click the gear icon and choose **Install Plugin from Disk…**
3. Pick the zip and restart the IDE.

It replaces the version you have. If you have the original FRC plugin from the Marketplace, uninstall it first (**Settings ▸ Plugins ▸ Installed ▸ FRC ▸ Uninstall**). The release notes also cover installing it by copying it into the plugins folder, and checking the download's SHA-256.

## Feedback

The SystemCore Console is new, so tell us how it does with your robot. If it doesn't connect, or something else doesn't work, [open an issue](https://github.com/thenetworkgrinch/frc-intelij-plugin/issues) with your IntelliJ version and what you were doing, or find us on the [YASS Discord](https://discord.gg/yass).
