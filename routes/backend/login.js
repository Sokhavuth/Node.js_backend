//routes/backend/login.js

import express from 'express'
const loginRouter = express.Router()
import login from '../../controllers/backend/login.js'
 
loginRouter.get('/',async function(req,res){
    await login.getPage(req,res)
})

loginRouter.post('/',async function(req,res){
    await login.verifyUser(req,res)
})

loginRouter.get('/logout', async function(req,res){
    req.session.destroy()
    res.redirect('/')
})
 
export default loginRouter