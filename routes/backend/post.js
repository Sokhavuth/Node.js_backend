//routes/backend/post.js

import express from 'express'
const postRouter = express.Router()
import post from '../../controllers/backend/post.js'

postRouter.get('/', async function(req,res){
    await post.getPage(req,res)
})

export default postRouter