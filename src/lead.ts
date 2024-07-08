#!/usr/bin/env node

import { Command } from "commander";
import server from "./server.js";
import build from "./build.js";

const lead = new Command();

lead.name("lead").description("A CLI app to develop LEAD app").version("1.0.0");

lead
  .command("run")
  .description("Run LEAD server")
  .option("-p, --port <PORT>", "Port server")
  .action(async ({ port }) => {
    await server("./src", port);
  });

lead
  .command("build")
  .description("Build LEAD for Production")
  .action(async () => {
    await build();
  });

lead.parse();
