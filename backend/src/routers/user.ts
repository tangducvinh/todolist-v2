import { Router } from 'express'
import { Request, Response } from 'express'
import { getAccounts, register } from '../controllers/user'

const router = Router()
router.get('/accounts', getAccounts)
router.put('/register', register)
router.get('/', (req:Request, res: Response) => res.json('home'))

export default router
