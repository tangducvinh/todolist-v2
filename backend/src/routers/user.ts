import { Router } from 'express'
import { Request, Response } from 'express'
import { getAccounts } from '../controllers/user'

const router = Router()
router.get('/accounts', getAccounts)
router.get('/', (req:Request, res: Response) => res.json('home'))

export default router
