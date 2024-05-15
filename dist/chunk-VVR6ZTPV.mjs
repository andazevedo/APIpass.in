import {
  generateSlug
} from "./chunk-677O5SV4.mjs";
import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/create-event.ts
import z from "zod";
async function createEvent(app) {
  app.withTypeProvider().post(
    "/events",
    {
      schema: {
        summary: "Create an event",
        tags: ["events"],
        body: z.object({
          title: z.string({ invalid_type_error: "O titlulo precisa ser um texto" }).min(4),
          details: z.string().nullable(),
          maximumAttendees: z.number().int().positive().nullable()
        }),
        response: {
          201: z.object({
            eventId: z.string().uuid()
          })
        }
      }
    },
    async (request, reply) => {
      const { title, details, maximumAttendees } = request.body;
      const slug = generateSlug(title);
      const eventWithSameSlug = await prisma.event.findUnique({
        where: {
          // slug: slug,
          slug
        }
      });
      if (eventWithSameSlug !== null) {
        throw new BadRequest("Another event with same title already exists");
      }
      const event = await prisma.event.create({
        //await: espera isso tudo terminar de processar pra então executar o resto, p usar wait a função q ta por fora dele precisa ser assincrona (acima)
        /*data:{ //uma forma de fazer
                    title: data.title,
                    details: data.details,
                    maximunAttendees: data.maximunAttendees,
                    slug,
                }*/
        data: {
          title,
          details,
          maximumAttendees,
          slug
        }
      });
      return reply.status(201).send({ eventId: event.id });
    }
  );
}

export {
  createEvent
};
