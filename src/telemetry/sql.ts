import { Database } from "bun:sqlite";
import fs from "node:fs/promises"
const logDbPath = process.env["LOG_SQLITE"];

if (logDbPath === undefined) {
    console.error("LOG_SQLITE is undefined in env.");
    process.exit(100);
}
export const logDb = new Database(logDbPath, { create: !(await fs.exists(logDbPath))});