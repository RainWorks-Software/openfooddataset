import { Database } from "bun:sqlite";
import fs from "node:fs/promises"
const logDbPath = process.env["LOG_SQLITE"];

if (logDbPath === undefined) {
    console.warn("LOG_SQLITE is undefined in env.");
}

export const logDb = new Database(logDbPath ?? ":memory:");