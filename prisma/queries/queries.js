import prisma from "./main"

export async function getCarrers() {
  const query = await prisma.carrers.findMany()
  return query
}

export async function getSubjects(carrer) {
  const query = await prisma.subjects.findMany({
    where: { carrerId: carrer },
  })
  return query
}
