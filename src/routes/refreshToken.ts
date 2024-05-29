import refreshToken from '../controllers/refreshToken'
import { Router } from 'express'

export default Router().get('/refresh_token', refreshToken)
