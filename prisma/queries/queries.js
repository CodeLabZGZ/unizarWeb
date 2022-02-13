import prisma from "./main"

export async function getCarrers() {
  const query = await prisma.carrers.findMany()
  return query
}

export async function getSubjects(career) {
  const query = await prisma.subjects.findMany({
    where: { carrerId: career },
  })
  return query
}

// Cambiar dependiendo de los nombres de la base de datos 
// Teoricamente devuelve todas las notas en la query, pero no se si las devolvera ordenadas como queremos o no...
export async function getNotes(career, place, subject, year){
  const query = await prisma.subjects.findMany({
    where: { carrerId: career, place : place, name : subject, year: year}
  })
  return query[0]
}

