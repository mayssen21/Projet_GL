import Fastify from "fastify";
import { isFeatureEnabled } from "./featureStore.mjs";

export function createServer() {
  const server = Fastify();

  server.get("/feature/:code", async (request, reply) => {
    const { code } = request.params;
    const enabled = await isFeatureEnabled(code);
    reply.send({ code, enabled });
  });

  return server;
}
