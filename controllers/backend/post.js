//controllers/backend/post.js

import category from '../../models/category.js'
import post from '../../models/post.js'

class Post{
    async getPage(req,res){
        req.settings.pageTitle = 'ទំព័រ​ការផ្សាយ'
        req.settings.message = ''
        req.settings.route = '/admin/post'
        req.settings.type = 'post'

        req.settings.categories = await category.getItem(req,'all')
        req.settings.items = await post.getItem(req,req.settings.dItemLimit)
        req.settings.count = await post.countItem(req)

        if(req.params.id){
            req.settings.item = await post.getItem(req,req.settings.dItemLimit,req.params.id)
        }
        
        res.render('base', {data:req.settings})
    }

    async createItem(req,res){
        if(req.session.user){
            post.createItem(req)

            res.redirect('/admin/post')
        }else{
            res.redirect('/admin/login')
        }
    }

    async updateItem(req,res){
        if((req.session.user.role == "Author")||(req.session.user.role == "Admin")){
            const postdb = await post.getItem(req)
            if((req.session.user.id == postdb.userid)||(req.session.user.role == "Admin")){
                await post.updateItem(req)
                res.redirect("/admin/post")
            }
        }else{
            res.redirect("/admin/login")
        }
    }
}

export default new Post()