---
title: "YAMS Learns to Sense the World"
sortDate: 2025-10-15
displayDate: "October 2025"
excerpt: "Sensors, exponential profiles, and a running list of small fixes as the first few weeks of YAMS feedback came in."
logoHeader: true
source: "https://www.chiefdelphi.com/t/introducing-yet-another-software-suite-yams-yall-yamg-yagsl/"
---

Two weeks after launch, the first real feedback started shaping YAMS. The biggest addition: `Sensor`s. You can now change a sensor's simulated value automatically during a match time range, when a trigger fires, or manually through the simulation GUI. That sounds small until you're trying to test what happens when a limit switch trips mid-match without actually driving into the limit switch.

We also added exponential motion profiles for elevators and arms that are a little underpowered or slow to accelerate, alongside the trapezoidal profiles YAMS already supported. And a few real bugs got found and fixed, including one where `ArmFeedforward` was being fed rotations instead of radians. That kind of unit mismatch is exactly the sort of thing YAMS is supposed to catch for you, so it was near the top of the list once someone hit it during a tuning session.

None of this came from us guessing what teams needed. It came from teams actually running YAMS on real subsystems in the first few weeks of the season and telling us where it fought back. That's the loop we're trying to keep going: ship something, watch what breaks, fix it fast.
