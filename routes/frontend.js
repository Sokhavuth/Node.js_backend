//routes/frontend.js
import express from 'express'
const frontendRouter = express.Router()
import settings from "../settings.js"
 
frontendRouter.get('/',(req,res)=>{
    res.render('base', {data:settings})
})
 
export default frontendRouter