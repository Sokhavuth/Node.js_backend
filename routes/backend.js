//routes/backend.js

import express from 'express'
const backendRouter = express.Router()

import loginRoute from './backend/login.js'
backendRouter.use('/login', loginRoute) 
 
export default backendRouter