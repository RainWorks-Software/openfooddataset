import Elysia from "elysia";
import { exists, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import fastJsonStringify from "fast-json-stringify";

const productsDir = join(process.env["PRODUCTS_DIR"] ?? "");
export const dataRoutes = new Elysia();

dataRoutes.get("/upc/:id", async (req) => {
    const productUpc = req.params.id;
    const attributesQuery = req.query["attributes"];
    const returnAsFile = req.query["raw"] !== undefined;
    const beStrict = req.query["strict"] !== undefined;

    const attributes = attributesQuery?.split(" ") ?? [];
    const path = join(productsDir, `${productUpc}.json`);
    if (!(await exists(path))) {
        req.set.status = 404;
        return {
            error: true,
            errcode: "PRODUCT_UPC_NOT_FOUND",
            message: `${productUpc} is not found.`,
        };
    }
    if (returnAsFile) {
        return Bun.file(path);
    }

    const obj = JSON.parse((await readFile(path)).toString());
    const keys = Object.keys(obj);
    const nObj: { [key: string]: any } = {};

    if (attributes.length > 0) {
        for (let attr of attributes) {
            if (keys.includes(attr)) {
                nObj[attr] = obj[attr];
            } else if (beStrict) {
                req.set.status = 400;
            }
        }

        return {
            error: false,
            data: nObj,
        };
    } else {
        return {
            error: false,
            data: obj,
        };
    }
});

dataRoutes.get("/upc/:id/keys", async (req) => {
    const productUpc = req.params.id;

    const path = join(productsDir, `${productUpc}.json`);
    if (!(await exists(path))) {
        req.set.status = 404;
        return {
            error: true,
            errcode: "PRODUCT_UPC_NOT_FOUND",
            message: `${productUpc} is not found.`,
        };
    }

    const obj = JSON.parse((await readFile(path)).toString());
    const keys = Object.keys(obj);
    return {
        error: false,
        data: {
            keys,
        }
    };
});

dataRoutes.get("/upc/stats", async (req) => {
    const productCount = (await readdir(productsDir)).length;

    return {
        productCount,
    };
});
