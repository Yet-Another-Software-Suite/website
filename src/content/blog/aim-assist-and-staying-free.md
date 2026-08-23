---
title: "Aim Assist Lands in YAGSL"
sortDate: 2026-02-23
displayDate: "February 2026"
excerpt: "SwerveInputStream picks up lookahead-based aiming for shooting on the move, built for the teams without a turret this year."
image: "yagsl-aim-test"
imageAlt: "A simulation test of YAGSL's new SwerveInputStream.aim lookahead targeting"
source: "https://www.chiefdelphi.com/t/introducing-yet-another-software-suite-yams-yall-yamg-yagsl/"
---

We reworked `SwerveInputStream.aim` this week to help with shooting on the move, which is a problem a lot of teams are going to have this year if they don't have a turret. Three new pieces: `aimLookahead(Time look)` estimates where you'll be by the time you shoot using your current pose and velocity, `aimFeedforward(kS, kV, kA)` calculates the target angular velocity so the robot swings smoothly onto the target instead of snapping to it, and `aimLock(Angle tolerance)` gives you a `Trigger` you can schedule your actual shot off of. Konnor's had success with it in simulation already.

A few days later, we also changed how YAMS handles motor configuration. Previously it left old configuration values in place unless you cleared them yourself. Now it resets to defaults and only applies what you actually define in `SmartMotorControllerConfig`. If you're relying on settings from REV Hardware Client or Tuner X that you didn't define in code, you'll need `SmartMotorControllerConfig.withResetPreviousConfig(false)` to keep them.

Also, since it comes up: YASS is free and will always be free. If you want to support the work, donations go toward things like the stickers we hand out at events, not toward gating any library behind a paywall. Good luck this season.
