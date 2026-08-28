import logo3481 from "../assets/logos/teams/3481.png";
import logo457 from "../assets/logos/teams/457.png";
import logo3561 from "../assets/logos/teams/3561.jpg";
import logo9658 from "../assets/logos/teams/9658.jpg";
import logo5561 from "../assets/logos/teams/5561.png";
import logo9738 from "../assets/logos/teams/9738.png";
import logo2181 from "../assets/logos/teams/2181.png";
import logo5517 from "../assets/logos/teams/5517.png";
import logo2225 from "../assets/logos/teams/2225.png";
import logo7900 from "../assets/logos/teams/7900.jpg";
import logo8818 from "../assets/logos/teams/8818.png";
import logo6911 from "../assets/logos/teams/6911.png";
import logo3100 from "../assets/logos/teams/3100.png";

export const foundingTeams = [
	{ name: "BroncBotz", number: 3481 },
	{ name: "Grease Monkeys", number: 457, url: "https://frcteam457.wixsite.com/team-457" },
	{ name: "RoboRaiders", number: 3561 },
	{ name: "Camber Robotics", number: 9658, url: "https://camberrobotics.com" },
];

// Quotes are reproduced as submitted by each team on our Fourthwall partner
// teams page, punctuation normalized only where needed for site style.
// `logo` and `contributions` are filled in per team as we get real assets/lists;
// until then the card falls back to a placeholder badge and hides the list.
export const testimonials = [
	{
		team: "BroncBotz",
		number: 3481,
		quote:
			"It's really inspiring to see the impact YASS has on the FRC community. Being able to learn and graspadvanced concepts like swerve and simulation is truly a game changer. YASS is really for everyone, no matter the skill level. We are excited to see what else YASS has in store for the future!",
		founding: true,
		logo: logo3481,
		contributions: ["YASS Student Leader", "YASS Kickoff Presenter", "2026 Worlds Presenter", "YASS Weekly Host", "Discord Moderator"],
	},
	{
		team: "Grease Monkeys",
		number: 457,
		quote:
			"YASS has had a transformative impact on Team 457, The Grease Monkeys, by opening new opportunities for us to learn, grow, and rebuild as a stronger team. With the guidance of our coach and mentors, we've had to restart FRC coding from the ground up, but YASS has made that process far more manageable. Its simplicity and reliability have taken much of the stress out of programming, allowing us to focus on developing our skills and building confidence.",
		url: "https://frcteam457.wixsite.com/team-457",
		founding: true,
		logo: logo457,
		contributions: ["YASS Kickoff Presenter", "YASS Weekly Host", "YAGSL MaxSwerve test robot"],
	},
	{
		team: "RoboRaiders",
		number: 3561,
		quote:
			"YASS has been a fundamental stepping stone for our team. With no mentors experienced in coding, our students often struggled to find reliable resources and troubleshoot complex issues. Thanks to the simplicity and accessibility of the YASS suite, students with little to no programming background have been able to successfully code entire robots, including swerve drives and multiple advanced subsystems. None of this would have been possible without YASS and the incredible YASS community.",
		founding: true,
		logo: logo3561,
		contributions: ["YAMS alpha tester", "YALL beta tester"],
	},
	{
		team: "Camber Robotics",
		number: 9658,
		quote:
			"At Camber Robotics, our primary mission is to make learning STEM easier and more accessible to those who have little to no resources like we once did. We believe YASS represents exactly what our team stands for in a way I've seen no other organization do. It raises the floor for teams across FRC with how easy and accessible it makes programming, without limiting teams to certain hardware brands.",
		url: "https://camberrobotics.com",
		founding: true,
		logo: logo9658,
		contributions: ["YASS Kickoff Presenter", "2026 Worlds Presenter", "Graphic Design", "Holiday Rivet Variants", "Helped develop Branding Standards", "Discord Moderator"],
	},
	{
		team: "GEARS",
		number: 2181,
		quote:
			"Using YAGSL has allowed our team to make unbelievable progress in terms of drivetrain capabilities. It made incorporating vision tracking, pose estimation, and field localization a breeze. With the built-in simulation, we were able to get Drive to Pose commands working and tested without access to a field, which is a huge success. Now with YAMS, we're able to take everything to the next level with simulation of any mechanism we might want to use.",
		url: "https://www.frcteam2181.com/",
		logo: logo2181,
		contributions: ["2026 Worlds Presenter", "YAMS beta tester", "Easy CRT beta tester", "Shoot on the Move tutorial", "Discord Moderator"],
	},
	{
		team: "Rebel Robotics",
		number: 2225,
		quote: "YASS IS LOVE YASS IS LIFE",
		url: "https://first2225.com",
		logo: logo2225,
		contributions: ["YAMS beta tester", "Easy CRT beta tester", "Discord Moderator"],
	},
	{
		team: "The Engineers on Fire",
		number: 5517,
		quote:
			"YASS has completely transformed how we build and code our robots. What started as Yet Another Generic Swerve Library has grown into an incredibly intuitive and dependable software suite that makes programming feel easy and exciting again. With YAMS now part of the mix, designing and fine-tuning our mechanisms has never been smoother.",
		url: "https://sites.google.com/view/frc5517",
		logo: logo5517,
		contributions: ["Inspiration for YAMS", "Contributed towards an upcoming library", "Discord Moderator"],
	},
	{
		team: "Raider Robotics",
		number: 5561,
		quote:
			"On 5561, we started using YAGSL in 2024-2025, and that was the easiest swerve library I've used. With the release of YAMG and YAMS, I have extremely high expectations for our team. YASS as a whole will be an incredible organization to learn from and to teach from.",
		url: "https://sites.google.com/view/frc5561/home",
		logo: logo5561,
		contributions: ["2026 Worlds Presenter"],
	},
	{
		team: "Trial and Terror",
		number: 7900,
		quote: null,
		logo: logo7900,
		contributions: ["YAGSL Maintainer", "Discord Moderator"],
	},
	{
		team: "Ionic Bond",
		number: 9738,
		quote:
			"YASS has been an amazing community to be part of and collaborate with. It enabled us to program a swerve drive much faster than we could have achieved on our own, while sparing us countless headaches. Thanks to YALL, working with the Limelight has also become far easier and more intuitive. We see YASS as a vital part of the FRC ecosystem and believe it deserves recognition for its simplicity and impact.",
		url: "https://ionicbond.io/",
		logo: logo9738,
		contributions: ["YASS Student Leader", "YASS Weekly Host", "Designed original Rivet Mascot"],
	},
];

// Past partner teams no longer active with YASS, but who made a lasting
// contribution to the suite.
export const legacyTeams = [
	{
		team: "Lightning Turtles",
		number: 3100,
		quote: null,
		logo: logo3100,
		contributions: [
			"Original testers of MaxSwerve support in YAGSL",
			"Helped other MaxSwerve teams adopt YAGSL",
		],
	},
	{
		team: "So Botz",
		number: 6911,
		quote: null,
		logo: logo6911,
		contributions: ["Developed EasyCRT for YAMS"],
	},
	{
		team: "Foe Foe Engineering",
		number: 8818,
		quote:
			"Using YAGSL made a huge difference in our ability to program our robot for the 2025 season. The library simplified programming and fine-tuning our swerve base, allowing our rookie programmer to get the drive base running smoothly. Thanks to YAGSL, we were able to focus on improving subsystems and develop autonomous routines much earlier in the season than we otherwise could have.",
		logo: logo8818,
		contributions: ["Helped develop and beta tested the YAGSL 8 steps"],
	},
];
