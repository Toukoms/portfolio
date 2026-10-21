import { watch } from "node:fs";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const dataPath = fileURLToPath(
  new URL("../src/data/resume.json", import.meta.url)
);
const generatorPath = fileURLToPath(
  new URL("./generate-resume-pdf.mjs", import.meta.url)
);
let timer;
let generating = false;
let pending = false;

function generate() {
  if (generating) {
    pending = true;
    return;
  }

  generating = true;
  const process = spawn(processExecPath, [generatorPath], { stdio: "inherit" });
  process.on("error", (error) => {
    console.error("Unable to start resume PDF generation:", error);
    generating = false;
  });
  process.on("exit", (code) => {
    generating = false;
    if (code !== 0) {
      console.error(`Resume PDF generation failed with exit code ${code}.`);
    }
    if (pending) {
      pending = false;
      generate();
    }
  });
}

const processExecPath = process.execPath;
const watcher = watch(new URL("../src/data/", import.meta.url), (_, filename) => {
  if (filename && filename.toString() !== "resume.json") return;
  clearTimeout(timer);
  timer = setTimeout(generate, 150);
});

generate();
console.log(`Watching ${dataPath} for changes. Press Ctrl+C to stop.`);

function stop() {
  clearTimeout(timer);
  watcher.close();
  process.exit(0);
}

process.on("SIGINT", stop);
process.on("SIGTERM", stop);
