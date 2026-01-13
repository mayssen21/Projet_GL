import Fastify from "fastify";

export function createServer() {
  const fastify = Fastify({
    logger: true 
  });

  fastify.get("/feature/:code", async (request, reply) => {
    const { code } = request.params;
    return { code, enabled: true }; 
  });

  return fastify;
}