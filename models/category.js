//models/category.js

class Category{
    async createItem(req){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()
 
        let myCategory = {
            id: id, 
            title: req.body.label,
            thumb: req.body.thumb,
            date: req.body.datetime
        }
 
        req.mydb.collection("categories").insertOne(myCategory)
    }

    async countItem(req){
        return await req.mydb.collection('categories').countDocuments()
    }

    async getItem(req,amount=10,id=false){
        if(id){
            return await req.mydb.collection("categories").findOne({id:id})
        }else if(req.body.page){
            let page = req.body.page
            return await req.mydb.collection("categories").find().skip(amount*page).sort({date:-1,_id:-1}).limit(amount).toArray()
        }else if(amount === 'all'){
            return await req.mydb.collection("categories").find({}, {title:1,_id:0}).sort({title:1}).toArray()
        }else{
            return await req.mydb.collection("categories").find().sort({date:-1,_id:-1}).limit(amount).toArray()
        }
    }

    async updateItem(req){
        const myquery = {id:req.params.id}
        let newvalue = {$set: {
            title: req.body.label,
            thumb: req.body.thumb,
            date: req.body.datetime
        }}
     
        await req.mydb.collection("categories").updateOne(myquery,newvalue)
    }

    async deleteItem(req){
        const myquery = {id:req.params.id}
     
        await req.mydb.collection("categories").deleteOne(myquery)
    }
}

export default new Category()