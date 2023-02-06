//index.js
//npm install express
//npm install ejs
//npm install express-session
//npm install connect-mongo
 
import express from 'express'
import path from 'path'
import session from 'express-session'
import MongoStore from 'connect-mongo' 
import dotenv from 'dotenv'
dotenv.config()
 
const app = express()
const port = process.env.PORT || 3000
process.env.TZ = "Asia/Phnom_Penh"
const __dirname = path.resolve()
 
import settings from './settings.js'
import frontend from './routes/frontend.js'
import backend from './routes/backend.js'
import mydb from './models/mongodb.js'

app.use('/',async function(req,res,next){
    req.mydb = await mydb
    req.settings = settings
    next()
})

app.use(session({
    store: MongoStore.create({mongoUrl:process.env.DATABASE_URI}),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))
 
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