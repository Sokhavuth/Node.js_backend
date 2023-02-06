//routes/frontend.js
import express from 'express'
const frontendRouter = express.Router()
 
frontendRouter.get('/',(req,res)=>{
    res.render('base', {data:req.settings})
})
 
export default frontendRouter