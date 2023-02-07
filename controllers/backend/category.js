//controllers/backend/category.js

import category from '../../models/category.js'

class Category{
    async getPage(req,res){
        if(req.session.user){
            req.settings.pageTitle = 'ទំព័រ​ជំពូក'
            req.settings.message = ''
            req.settings.route = '/admin/category'
  
            res.render('base', {data:req.settings})
        }else{
            res.redirect('/admin/login')
        }
    }

    async createItem(req,res){
        if(req.session.user){
            if(req.session.user.role == 'Admin'){
                category.createItem(req,res)
            }

            res.redirect('/admin/category')
        }else{
            res.redirect('/admin/login')
        }
    }
}

export default new Category()