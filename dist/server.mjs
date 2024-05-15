import {
  resgisterForEvent
} from "./chunk-TYNZXXEI.mjs";
import {
  errorHandler
} from "./chunk-BPKEIHVG.mjs";
import {
  checkIn
} from "./chunk-PZMTOFOL.mjs";
import {
  createEvent
} from "./chunk-VVR6ZTPV.mjs";
import "./chunk-677O5SV4.mjs";
import {
  getAttendeeBadge
} from "./chunk-LPO4TN5X.mjs";
import {
  getEventAttendees
} from "./chunk-PCCLJAGO.mjs";
import {
  getEvent
} from "./chunk-2HVSX3LQ.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xE3o da API para o back-end da aplica\xE7\xE3opass.inconstru\xEDda durante o NLW Unite da RocketSeat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(resgisterForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on http://localhost:3333");
});
