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
}

export default new Post()