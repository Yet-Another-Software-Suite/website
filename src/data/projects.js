import yagslLogo from "../assets/logos/yagsl-logo.png";
import yamsLogo from "../assets/logos/yams-logo.png";
import yallLogo from "../assets/logos/yall-logo.png";

export const projects = [
	{
		key: "yagsl",
		name: "YAGSL",
		fullName: "Yet Another Generic Swerve Library",
		description:
			"A plug-and-play swerve drive library. Describe your robot's hardware in a JSON file and YAGSL handles kinematics, odometry, and motor configuration, whether you're wiring up your first swerve chassis or tuning a competition drivetrain.",
		docs: "https://yagsl.yassrobotics.com",
		github: "https://github.com/Yet-Another-Software-Suite/YAGSL",
		extra: { label: "Config Generator", url: "https://config.yagsl.com" },
		ledColor: "var(--color-yass-600)",
		logo: yagslLogo,
	},
	{
		key: "yams",
		name: "YAMS",
		fullName: "Yet Another Mechanism System",
		description:
			"A unified interface for elevators, arms, and pivots, with simulation and telemetry built in from the start. Write your mechanism code once and run it the same way on the real robot and in sim, for FRC and FTC.",
		docs: "https://yams.yassrobotics.com",
		github: "https://github.com/Yet-Another-Software-Suite/YAMS",
		ledColor: "var(--color-sapphire)",
		logo: yamsLogo,
	},
	{
		key: "yamg",
		name: "YAMG",
		fullName: "Yet Another Mechanism Generator",
		description:
			"A web-based mechanism simulator and code generator. Prototype an arm, elevator, or turret and see how it behaves before you've cut a single piece of metal.",
		docs: "https://yamg.yassrobotics.com",
		github: "https://github.com/Yet-Another-Software-Suite/yamg",
		extra: { label: "Live Tool", url: "https://yamg.yassrobotics.com" },
		ledColor: "var(--color-yamg)",
	},
	{
		key: "yall",
		name: "YALL",
		fullName: "Yet Another Limelight Library",
		description:
			"A simpler, more reliable interface for getting Limelight vision working on your robot, without having to dig through NetworkTables by hand.",
		docs: "https://yall.yassrobotics.com",
		github: "https://github.com/Yet-Another-Software-Suite/YALL",
		ledColor: "var(--color-yall)",
		logo: yallLogo,
	},
];
