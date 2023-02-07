//routes/backend.js

import express from 'express'
const backendRouter = express.Router()

import loginRouter from './backend/login.js'
backendRouter.use('/login', loginRouter) 

import postRouter from './backend/post.js'
backendRouter.use('/post', postRouter)

import categoryRouter from './backend/category.js'
backendRouter.use('/category', categoryRouter)
 
export default backendRouter