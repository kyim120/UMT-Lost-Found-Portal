import express from 'express'
import { getMatches } from '../controllers/match.controller'

const router = express.Router()

// Example: GET /api/match/lost/:id
router.get('/lost/:id', getMatches)

export default router
