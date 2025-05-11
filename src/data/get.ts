import Elysia from "elysia";

export const dataRoutes = new Elysia();

dataRoutes.get("/upc/:id", async (req) => {
    const productUpc = req.params.id;
    const attributesQuery = req.query["attributes"];

    if (attributesQuery && /^([a-zA-Z0-9_-]+=[a-zA-Z0-9_-]+)(\+([a-zA-Z0-9_-]+=[a-zA-Z0-9_-]+))*$/g.test(attributesQuery) === false) throw "Invalid combination.";
    const attributes = attributesQuery?.split("+") ?? [];


})