//routes/backend/category.js

import express from 'express'
const categoryRouter = express.Router()
import category from '../../controllers/backend/category.js'

categoryRouter.get('/', async function(req,res){
    await category.getPage(req,res)
})

categoryRouter.post('/', async function(req,res){
    await category.createItem(req,res)
})

export default categoryRouter