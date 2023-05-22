import * as view from "@fastify/view";
import * as eta from "eta";
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.register(view, {
  engine: {
    eta,
  },
});

fastify.get("/", (req, reply) => {
  reply.view("/routes/index.eta", { text: "big textttttt" });
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
