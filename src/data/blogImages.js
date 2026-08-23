// Maps the `image` string in each blog post's frontmatter to an imported,
// build-time-optimized asset. Add one import + one entry per image used.

import kickoffEvePixelArt1 from "../assets/blog/kickoff-eve-pixel-art-1.png";
import kickoffEvePixelArt2 from "../assets/blog/kickoff-eve-pixel-art-2.png";
import worlds2026PixelArt from "../assets/blog/worlds-2026-pixel-art.png";
import yagslAimTest from "../assets/blog/yagsl-aim-test.gif";
import yamgLaunchDemo from "../assets/blog/yamg-launch-demo.gif";

export const blogImages = {
	"yamg-launch-demo": yamgLaunchDemo,
	"kickoff-eve-pixel-art-1": kickoffEvePixelArt1,
	"kickoff-eve-pixel-art-2": kickoffEvePixelArt2,
	"yagsl-aim-test": yagslAimTest,
	"worlds-2026-pixel-art": worlds2026PixelArt,
};
