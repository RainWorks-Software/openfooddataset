import fs from "node:fs";
import readline from "node:readline";
import { Product } from "../types/openfoodfacts-product";
import path from "node:path";

const JSONLFilePath = "/mnt/data/OFF/openfoodfacts-products.jsonl";
const JSONOutputPath = "/mnt/data/OFF/products/";
const startFrom = 3478329;
const totalRoughly = 3908089; // this comes from the parquet file on hugginface
const actualTotal = 3852569;

const filestream = fs.createReadStream(JSONLFilePath, { encoding: "utf-8" });
const rl = readline.createInterface({
    input: filestream,
    crlfDelay: Infinity,
});

let cur = 0;
for await (const line of rl) {
    try {
        const obj: Product = JSON.parse(line);
        fs.writeFileSync(
            path.join(JSONOutputPath, `${obj._id}.json`),
            JSON.stringify(obj)
        );
        console.log(
            `[${cur}/${totalRoughly}] [${((cur / totalRoughly) * 100)
                .toString()
                .substring(0, 5)}%] - ${obj._id}.json`
        );
    } catch (error) {
        console.log(`had error at ${cur}`);
    } finally {
        cur = cur + 1;
    }
}

filestream.close();
