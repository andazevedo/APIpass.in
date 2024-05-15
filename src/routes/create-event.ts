import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import z from "zod";
import { generateSlug } from "../utils/generate-slug";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { BadRequest } from "./_errors/bad-request";

export async function createEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/events",
    {
      schema: {
        summary: "Create an event",
        tags: ["events"],
        body: z.object({
          title: z
            .string({ invalid_type_error: "O titlulo precisa ser um texto" })
            .min(4),
          details: z.string().nullable(),
          maximumAttendees: z.number().int().positive().nullable(),
        }),
        response: {
          201: z.object({
            eventId: z.string().uuid(),
          }),
        },
      },
    },
    async (request, reply) => {
      // async: assincrona, tem coisas dentro dela que vão levar temppo pra executar, por isso o await abaixo

      // const data = createEventSchema.parse(request.body) //uma forma de fazer, sem desesntruturar o objeto
      const { title, details, maximumAttendees } = request.body;

      //const slug = generateSlug(data.title) //uma forma de fazer
      const slug = generateSlug(title);

      const eventWithSameSlug = await prisma.event.findUnique({
        where: {
          // slug: slug,
          slug,
        },
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
          slug,
        },
      });

      //return {eventId: event.id}
      return reply.status(201).send({ eventId: event.id });
    }
  );
}
