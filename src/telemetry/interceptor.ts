import Elysia from "elysia";
import { ip } from "elysia-ip";

export const interceptor = new Elysia();


// TODO: add telemetry
interceptor.use(ip())
interceptor.onRequest(handle => {
    const ip = handle.server?.requestIP(handle.request);
    const isUpcRoute = handle.request.url.includes("/upc");
    // console.log({ip});
})