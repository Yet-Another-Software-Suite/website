---
title: "Introducing YASS: Yet Another Software Suite"
sortDate: 2025-10-02
displayDate: "October 2, 2025"
excerpt: "YAGSL moves under a new banner, and YAMS, YAMG, and YALL launch alongside it: four libraries built to make FRC programming faster to learn and easier to share."
image: "yamg-launch-demo"
imageAlt: "YAMG, the YASS mechanism generator, showing a mechanism being designed and simulated in the browser"
source: "https://www.chiefdelphi.com/t/introducing-yet-another-software-suite-yams-yall-yamg-yagsl/"
---

We've been hinting at this for a while, so here it is. YAGSL is getting a new home, and it's bringing three new libraries with it: YAMS, YAMG, and YALL. Together they're Yet Another Software Suite, or YASS.

**YAMS (Yet Another Mechanism System)** is the big one. It's a high-level abstraction layer for building subsystems: arms, elevators, pivots, shooters, swerve modules, double-jointed arms, differential mechanisms. Every mechanism runs through a unified `SmartMotorController` interface, so a SparkMax, a TalonFX, a TalonFXS, and a ThriftyNova all get configured the same way. Simulation is built in from the start, not bolted on. The only difference between your real robot code and your sim code is calling `.simIterate()` in `simulationPeriodic`.

**YAMG (Yet Another Mechanism Generator)** is a web tool at yamgen.com that lets you design an arm, elevator, or pivot by filling out a form, watch it simulate, and export working Java. You can use the code it generates without touching YAMS at all if you'd rather own every line yourself.

**YALL (Yet Another Limelight Library)** is a cleaned-up wrapper around `LimelightHelpers.java` with full JavaDocs and real-robot integration. It's currently the one library in the suite without simulation support.

**YAGSL** is still YAGSL, just under the new org now. It'll keep getting maintained and improved alongside everything else.

None of this happens without the teams that got us here: our founding teams BroncBotz 3481, Camber 9658, Grease Monkeys 457, and RoboRaiders 3561, plus a growing list of partner teams putting these libraries on real robots and telling us what breaks. If you want to try any of it, the code, the examples, and the Discord are all linked from the [projects page](/projects). Good luck this season.
