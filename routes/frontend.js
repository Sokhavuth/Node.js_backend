//routes/frontend.js

import express from 'express'
const frontendRouter = express.Router()
import index from '../controllers/frontend/index.js'
 
frontendRouter.get('/',async function(req,res){
    await index.getPage(req,res)
})
 
export default frontendRouter