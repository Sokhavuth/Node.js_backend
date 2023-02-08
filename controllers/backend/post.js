//controllers/backend/post.js

import category from '../../models/category.js'

class Post{
    async getPage(req,res){
        req.settings.pageTitle = 'ទំព័រ​ការផ្សាយ'
        req.settings.message = ''
        req.settings.route = '/admin/post'
        req.settings.type = 'post'

        req.settings.categories = await category.getItem(req,'all')
        
        res.render('base', {data:req.settings})
    }
}

export default new Post()