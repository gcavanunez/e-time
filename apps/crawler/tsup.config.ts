import { defineConfig } from "tsup";
import type { Options } from "tsup";

export default defineConfig((options: Options) => ({
	entryPoints: ["src/index.ts"],
	outDir: "tsup",
	clean: true,
	bundle: true,
	noExternal: [/(.*)/],
	target: "esnext",
	format: ["esm"],
	...options,
}));
