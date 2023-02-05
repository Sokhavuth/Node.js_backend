//routes/backend/login.js

import express from 'express'
const loginRouter = express.Router()
 
loginRouter.get('/',async function(req,res) {
    let module = await import('../../controllers/backend/login.js')
    module.default(req,res)
})
 
export default loginRouter