import login from '../controllers/login'
import { Router } from 'express'

export default Router().get('/login', login)
