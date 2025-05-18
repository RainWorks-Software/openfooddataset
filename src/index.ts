import { Elysia } from "elysia";
import { dataRoutes } from "./data/get";

const app = new Elysia().get("/", () => "Powered with ElysiaJS.").listen(3000);
app.use(dataRoutes);

if (process.env["PRODUCTS_DIR"] === undefined) {
  console.error("PRODUCTS_DIR is undefined in env.");
  process.exit(1);
}

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
