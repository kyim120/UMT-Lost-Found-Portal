import express from 'express'
import { getChats, getChatById } from '../controllers/chat.controller'

const router = express.Router()

router.get('/', getChats)
router.get('/:id', getChatById)

export default router
