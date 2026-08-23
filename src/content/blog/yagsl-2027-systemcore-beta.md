---
title: "YAGSL 2026.8.18: A Beta for the SystemCore Transition"
sortDate: 2026-08-18
displayDate: "August 18, 2026"
excerpt: "A roboRIO-only beta that points YAGSL at the 2027 SystemCore transition. Brushed motor support is gone, gyro support is narrower, and we need teams to try and break it."
logoHeader: true
source: "https://www.chiefdelphi.com/t/beta-yagsl-2026-8-18-the-2027-systemcore-era-beta/523434"
---

YAGSL `2026.8.18` is out as a beta for teams starting to prep for the 2027 roboRIO to SystemCore transition. It runs on WPILib 2026.2.1, not the 2027 alpha, since YAMS isn't fully ready for that alpha yet and we didn't want to block this on it.

Here's the real change: YAGSL used to try to support almost every motor controller and gyro combination a team could show up with. This version narrows that on purpose. It now supports brushless motors and whatever hardware we're confident will actually exist on SystemCore. That means all brushed motor controller support is gone, and so is support for MXP/SPI/I2C/USB gyros like the classic NavX2. SparkMAX is still fully supported, just brushless only.

We know plenty of teams have a NavX2 bolted to their roboRIO right now and aren't about to throw it away. That's what the new `custom` gyro type is for. Set `gyro.type` to `custom` in `swervedrive.json` and YAGSL skips gyro setup entirely, you build and supply your own gyro on `SwerveDriveConfig` before handing it to `SwerveParser`. `gyroAxis` and `gyroInvert` in the JSON get ignored for a custom gyro, do your inversion in the supplier itself. Full walkthrough is in the docs.

**Why drop USB/I2C gyros specifically?** Studica shipped two conflicting vendordeps this season, one for the NavX-mxp and NavX2-mini, another for the NavX3. Until those get merged or Studica announces real NavX2-mxp support, we don't see a reason to hold this release for them. Those setups have also traditionally been unreliable on the roboRIO, and since this beta targets roboRIOs while being built for SystemCore, it didn't make sense to spend more time on hardware that's on its way out. The custom gyro type exists specifically so you're not stuck if you're in that position.

**Schema changes, if you're catching up:** `imu` is now `gyro` (with the new `custom` type), `invertedIMU` is `gyroInvert`, bare type strings like `"navx"` are now `<device>_<connection>` strings like `"pigeon2_can"`, `encoder` is now `absoluteEncoder`, `conversionFactors` is now `gearing` (no more manual factor math), `currentLimit` is `statorCurrentLimit`, and the old `controllerproperties.json` heading PID is gone entirely, heading hold now lives in your own robot code via `SwerveInputStream`. The config generator at config.yagsl.com builds your whole `swerve/` directory from a guided form now, so you don't have to hand-write most of this anyway.

The bigger shift under the hood: since the `2026.8.05` rewrite, YAGSL isn't a standalone swerve implementation anymore, it's a thin JSON parser that builds a YAMS `SwerveDrive`. You're no longer handing YAGSL one opaque max speed number and getting a black box back. You own a real `SwerveDriveConfig`, which is exactly what makes the custom gyro pattern above possible: extend the config yourself for anything the JSON can't express, and YAGSL fills in the rest.

This version is also built to take advantage of SystemCore once it's out. It'll automatically log a sensible schema to wpilog that you can read back in AdvantageScope, so you can see what happened during a match without instrumenting every NT field yourself. It no longer requires every vendordep to be installed. Cosine compensation in simulation is fixed. And because tuning now effectively has to happen in simulation first, new programmers get to practice tuning a robot before they ever touch the real one.

The YAMS SwerveDrive underneath this has been running all season, but a roboRIO-only beta ahead of a hardware transition is exactly the kind of thing that needs more eyes on it before it's the only option left for 2027. If you can break it, please do, and file an issue. We'd much rather find the bugs now than during a competition. Install link, docs, and the Discord are all on the [projects page](/projects).
