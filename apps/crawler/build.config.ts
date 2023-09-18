import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	entries: ["./src/index"],
	outDir: "unbuild",

	rollup: {
		// inlineDependencies: true,
		esbuild: {
			platform: "node",
			target: ["node10.4"],
		},
	},
});
