import { Request, Response } from 'express'
import { findMatchesForLostItem } from '../services/match.service'

export const getMatches = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const matches = await findMatchesForLostItem(id)
    res.status(200).json({ matches })
  } catch (error) {
    console.error('Error in getMatches:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
