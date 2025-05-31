import { Request, Response } from 'express'
import { prisma } from '../config/db'

export const getClaims = async (req: Request, res: Response) => {
  try {
    const claims = await prisma.claim.findMany()
    res.json(claims)
  } catch (error) {
    console.error('Error fetching claims:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const getClaimById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const claim = await prisma.claim.findUnique({ where: { id } })
    if (!claim) {
      return res.status(404).json({ message: 'Claim not found' })
    }
    res.json(claim)
  } catch (error) {
    console.error('Error fetching claim:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
