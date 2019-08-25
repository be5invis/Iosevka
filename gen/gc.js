"use strict";

const { Workflow, introduce, build, gc } = require("megaminx");
const argv = require("yargs").argv;

async function recipe(ctx, config, argv) {
	const a = await ctx.run(introduce, "a", { from: argv.i });
	await ctx.run(gc, "a");
	await ctx.run(build, "a", { to: argv.o, optimize: true });
}

async function main() {
	const config = {};
	const flow = new Workflow(config);
	await flow.run(recipe, config, argv);
}

main();
