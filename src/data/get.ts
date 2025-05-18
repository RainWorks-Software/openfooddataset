import Elysia, { t } from "elysia";
import { exists, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const productsDir = join(process.env["PRODUCTS_DIR"] ?? "");
export const dataRoutes = new Elysia();

dataRoutes.get("/upc/:id", async (req) => {
    const productUpc = req.params.id;
    const attributesQuery = req.query["attributes"];
    const returnAsFile = Object.keys(req.query).includes("raw");
    const beStrict = Object.keys(req.query).includes("strict");

    // console.log({attributesQuery})

    const attributes = attributesQuery?.split(" ") ?? [];
    const path = join(productsDir, `${productUpc}.json`);
    if (!(await exists(path))) {
        req.set.status = "Not Found";
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

    // console.log({returnAsFile, beStrict, attributes, atl: attributes.length})

    if (attributes.length > 0 && attributes[0] !== "") {
        for (let attr of attributes) {
            if (keys.includes(attr)) {
                nObj[attr] = obj[attr];
            } else if (beStrict) {
                req.set.status = "Bad Request";
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
}, {
    detail: {
        description: "Retrive a specific product from the database from its UPC code.", 
    },
    params: t.Object({
        id: t.String({
            description: "The UPC code of the product.",
            examples: ["0028400516679"],
        }),
    }),
    query: t.Object({
        attributes: t.Optional(t.String({
            description: "The attributes that will be returned seperated with +",
            default: "",
            examples: ["_id+product_name"]
        })),
        raw: t.Optional(t.Any({
            description: "If this attribute is present, the data will be returned as a file and not as a JSON response.",
            examples: ["aaaa", "true", "y", ""]
        })),
        strict: t.Optional(t.Any({
            description: "If this attribute is present, if a fetched attribute does not exist, the request fails.",
            examples: ["aaa", "true", "y", ""]
        })),
    }),
});

dataRoutes.get("/upc/:id/keys", async (req) => {
    const productUpc = req.params.id;

    const path = join(productsDir, `${productUpc}.json`);
    if (!(await exists(path))) {
        req.set.status = "Not Found";
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
}, {
    detail: {
        description: "Retrive all attributes of a specific product from its UPC code.",
    },
    params: t.Object({
        id: t.String(),
    }),
});

dataRoutes.get("/upc/stats", async (req) => {
    const productCount = (await readdir(productsDir)).length;
    const productsDate = process.env["PRODUCTS_DATE"] ?? "No date known";

    return {
        productCount,
        productsDate,
    };
});
