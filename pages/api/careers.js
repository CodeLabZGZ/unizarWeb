import { getCarrers } from "../../prisma/queries/queries"

export default async (req, res) => {
  const allowedMethods = ["GET"]
  const method = req.method

  if (!allowedMethods.includes(method)) {
    res.setHeader("Allow", allowedMethods)
    res.status(405).end(`Method ${method} Not Allowed`)
  }
  if (method === "GET") {
    res.status(200).json({
      data: {
        carrers: await getCarrers(),
      },
      status: {
        status_code: 200,
        timestamp: new Date(),
      },
    })
  }
}
