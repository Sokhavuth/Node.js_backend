//index.js
//npm install express
//npm install ejs
 
import express from 'express'
import path from 'path'
 
const app = express()
const port = process.env.PORT || 3000
process.env.TZ = "Asia/Phnom_Penh"
const __dirname = path.resolve()
 
import frontend from './routes/frontend.js'
import backend from './routes/backend.js'
 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
                                  
app.use('/',frontend) 
app.use('/admin',backend) 
 
app.listen(port,function(){
    console.log(`This application is listening to the port: ${port}`)
})
 
export default app