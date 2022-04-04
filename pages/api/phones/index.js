import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  try {
    const phones = await prisma.phone.findMany();
    res.status(200).json(phones);
  } catch (error) {
    console.log(error);
    res.status(500).end(error.message);
  }
}
