//routes/backend.js

import express from 'express'
const backendRouter = express.Router()

import loginRouter from './backend/login.js'
backendRouter.use('/login', loginRouter) 
 
export default backendRouter