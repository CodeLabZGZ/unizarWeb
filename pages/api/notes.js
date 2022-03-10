import { getNotes } from "../../prisma/queries/queries"

export default async (req, res) => {
  const allowedMethods = ["GET"]
  const method = req.method

  if (!allowedMethods.includes(method)) {
    res.setHeader("Allow", allowedMethods)
    res.status(405).end(`Method ${method} Not Allowed`)
  }
  if (method === "GET") {
    const { career, place, subject, year } = req.query
    let marks
    try {
      const {notPresented, failed, passed, notables, sobresalientes, matriculasHonor} = await getNotes(career, place, subject, Number(year))
      marks = [notPresented, failed, passed, notables, sobresalientes, matriculasHonor]
    } catch (error) {
      marks = []
    }
    
    res.status(200).json({
      data: {
        marks: marks,
      },
      status: {
        status_code: 200,
        timestamp: new Date(),
      },
    })
  }
}