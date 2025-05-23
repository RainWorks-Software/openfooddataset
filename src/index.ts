import { Elysia } from "elysia";
import { dataRoutes } from "./data/get";
import swagger from "@elysiajs/swagger";
import { HttpStatusCode } from "elysia-http-status-code";
import { rateLimit } from "elysia-rate-limit";
import { opentelemetry } from "@elysiajs/opentelemetry";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { ip } from "elysia-ip";
import { interceptor } from "./telemetry/interceptor";

const app = new Elysia().get("/", () => "Powered with ElysiaJS.").listen(3000);
app.use(HttpStatusCode());
app.use(
  swagger({
    path: "/spec",
    documentation: {
      info: {
        title: "OpenFoodFacts R/O Database",
        version: "1.0.0",
      },
    },
  })
);
app.use(
  opentelemetry({
    spanProcessors: [new BatchSpanProcessor(new OTLPTraceExporter())],
  })
);
app.use(
  rateLimit({
    max: 50,
    errorResponse: new Response(
      JSON.stringify({
        error: true,
        errcode: "RATE_LIMITED",
        message: "You are being rate limited.",
      }),
      {
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        status: 429,
      }
    ),
  })
);
app.use(ip({}));

app.use(interceptor);
app.use(dataRoutes);

if (process.env["PRODUCTS_DIR"] === undefined) {
  console.error("PRODUCTS_DIR is undefined in env.");
  process.exit(1);
}

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
