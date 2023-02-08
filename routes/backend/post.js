//routes/backend/post.js

import express from 'express'
const postRouter = express.Router()
import post from '../../controllers/backend/post.js'

postRouter.get('/', async function(req,res){
    await post.getPage(req,res)
})

postRouter.post('/', async function(req,res){
    await post.createItem(req,res)
})

postRouter.get('/edit/:id', async function(req,res){
    await post.getPage(req,res)
})

postRouter.post('/edit/:id', async function(req,res){
    await post.updateItem(req,res)
})

export default postRouter