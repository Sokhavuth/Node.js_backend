//models/users.js
//npm install bcryptjs

import bcrypt from 'bcryptjs'

class User{
    async createRootUser(req,res){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()
        const hashPassword = bcrypt.hashSync("xxxxxxxxxxxx", 8)

        const user = {
            id: id, 
            title: "Sokhavuth",
            password: hashPassword,
            email: 'xxxxxxxxxx',
            role: 'Admin',
            thumb: '',
            info: '',
            video: '',
            date: new Date()
        }

        await req.mydb.collection("users").insertOne(user)
    }

    async checkUser(req,res){
        const query = {email:req.body.email}
        let user = await req.mydb.collection("users").findOne(query)
        return user
    }
}

export default new User()