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

categoryRouter.get('/edit/:id', async function(req,res){
    await category.getPage(req,res)
})

categoryRouter.post('/edit/:id', async function(req,res){
    await category.updateItem(req,res)
})

categoryRouter.get('/delete/:id', async function(req,res){
    await category.deleteItem(req,res)
})

categoryRouter.post('/paginate', async function(req,res){
    await category.paginateItem(req,res)
})

export default categoryRouter