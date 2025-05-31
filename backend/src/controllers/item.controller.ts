import { Request, Response } from 'express'
import { prisma } from '../config/db'

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await prisma.lostItem.findMany()
    res.json(items)
  } catch (error) {
    console.error('Error fetching items:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const getItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const item = await prisma.lostItem.findUnique({ where: { id } })
    if (!item) {
      return res.status(404).json({ message: 'Item not found' })
    }
    res.json(item)
  } catch (error) {
    console.error('Error fetching item:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
