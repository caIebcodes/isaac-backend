import { Router } from 'express'
import callback from '../controllers/callback'

export default Router().get('/callback', callback)
