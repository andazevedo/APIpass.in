import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "cc1dfe8b-265f-4d15-84e9-434c98051390",
      title: "Unite summit",
      slug: "unite-summit",
      details: "an event to devs!",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("database seeded!");
  prisma.$disconnect();
});
