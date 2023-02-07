//models/category.js

class Category{
    async createItem(req,res){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()
 
        let myCategory = {
            id: id, 
            label: req.body.label,
            thumb: req.body.thumb,
            date: req.body.datetime
        }
 
        req.mydb.collection("categories").insertOne(myCategory)
    }
}

export default new Category()