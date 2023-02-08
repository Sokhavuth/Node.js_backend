//models/post.js

class Post{
    async createItem(req){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()

        let categories = []

        if(req.body.categories.includes(',')){
            let str = req.body.categories.replace(/\s+/g, "")
            categories = str.split(',')
        }else{
            categories = [req.body.categories]
        }
        
        const new_post = {
            id: id,
            title: req.body.title,
            content: req.body.content,
            categories: categories,
            thumb: req.body.thumb,
            date: req.body.datetime,
            videos: req.body.videos,
            userid: req.session.user.id,
        }
        
        await req.mydb.collection("posts").insertOne(new_post)
    }

    async countItem(req){
        return await req.mydb.collection('posts').countDocuments()
    }

    async getItem(req,amount=10,id=false){
        if(id){
            return await req.mydb.collection("posts").findOne({id:id})
        }else if(req.body.page){
            let page = req.body.page
            return await req.mydb.collection("posts").find().skip(amount*page).sort({date:-1,_id:-1}).limit(amount).toArray()
        }else if(amount === 'all'){
            return await req.mydb.collection("posts").find({}, {title:1,_id:0}).sort({title:1}).toArray()
        }else{
            return await req.mydb.collection("posts").find().sort({date:-1,_id:-1}).limit(amount).toArray()
        }
    }

    async updateItem(req){
        const myquery = {id:req.params.id}
        let categories = []

        if(req.body.categories.includes(',')){
            let str = req.body.categories.replace(/\s+/g, "")
            categories = str.split(',')
        }else{
            categories = [req.body.categories]
        }
        
        let newvalue = {$set: {
            title: req.body.title,
            content: req.body.content,
            categories: categories,
            thumb: req.body.thumb,
            date: req.body.datetime,
            videos: req.body.videos
        }}
     
        await req.mydb.collection("posts").updateOne(myquery,newvalue)
    }
}

export default new Post()