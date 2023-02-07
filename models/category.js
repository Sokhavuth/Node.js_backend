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

    async getItem(req,amount=10,id=false,page=0){
        if(id){
            return await req.mydb.collection("categories").findOne({id:id})
        }else if(page){
            return await req.mydb.collection("categories").find().skip(amount*page).sort({date:-1,_id:-1}).limit(amount).toArray()
        }else if(amount === 'all'){
            return await req.mydb.collection("categories").find({}, {title:1,_id:0}).sort({title:1}).toArray()
        }else{
            return await req.mydb.collection("categories").find().sort({date:-1,_id:-1}).limit(amount).toArray()
        }
    }
}

export default new Category()