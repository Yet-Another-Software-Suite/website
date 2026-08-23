// Maps the `image` string in each blog post's frontmatter to an imported,
// build-time-optimized asset. Add one import + one entry per image used.

import yagslAimTest from "../assets/blog/yagsl-aim-test.png";
import yamgLaunchDemo from "../assets/blog/yamg-launch-demo.gif";

export const blogImages = {
	"yamg-launch-demo": yamgLaunchDemo,
	"yagsl-aim-test": yagslAimTest,
};
