import express from 'express'
import { getClaims, getClaimById } from '../controllers/claim.controller'

const router = express.Router()

router.get('/', getClaims)
router.get('/:id', getClaimById)

export default router
