//routes/backend.js
import express from 'express'
const backendRouter = express.Router()
 
backendRouter.get('/',(req,res)=>{
    res.render('base')
})
 
export default backendRouter