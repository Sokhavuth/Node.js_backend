//models/mongodb.js
//npm install mongodb@4.13
//npm install dotenv
 
import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.DATABASE_URI
const client = new MongoClient(uri)

try{
    await client.connect()
    var database = client.db('backend')
    console.log("Connect to the main database.")
}catch(err){
    console.log(err.message)
    await client.close()
}
  
export default database