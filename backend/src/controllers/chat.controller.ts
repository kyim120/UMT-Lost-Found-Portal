import { Request, Response } from 'express'
import { prisma } from '../config/db'

export const getChats = async (req: Request, res: Response) => {
  try {
    const chats = await prisma.chat.findMany()
    res.json(chats)
  } catch (error) {
    console.error('Error fetching chats:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const getChatById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const chat = await prisma.chat.findUnique({ where: { id } })
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' })
    }
    res.json(chat)
  } catch (error) {
    console.error('Error fetching chat:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
