//routes/backend.js

import express from 'express'
const backendRouter = express.Router()

import loginRouter from './backend/login.js'
backendRouter.use('/login', loginRouter) 

import postRouter from './backend/post.js'
backendRouter.use('/post', postRouter)
 
export default backendRouter