//controllers/backend/category.js

import category from '../../models/category.js'

class Category{
    async getPage(req,res){
        if(req.session.user){
            req.settings.pageTitle = 'ទំព័រ​ជំពូក'
            req.settings.message = ''
            req.settings.route = '/admin/category'
            req.settings.type = "category"

            req.settings.items = await category.getItem(req,req.settings.dItemLimit)
            req.settings.count = await category.countItem(req)

            if(req.params.id){
                req.settings.item = await category.getItem(req,req.settings.dItemLimit,req.params.id)
            }
  
            res.render('base', {data:req.settings})
        }else{
            res.redirect('/admin/login')
        }
    }

    async createItem(req,res){
        if(req.session.user){
            if(req.session.user.role == 'Admin'){
                category.createItem(req)
            }

            res.redirect('/admin/category')
        }else{
            res.redirect('/admin/login')
        }
    }

    async updateItem(req,res){
        if(req.session.user){
            if(req.session.user.role == 'Admin'){
                category.updateItem(req)
            }

            res.redirect('/admin/category')
        }else{
            res.redirect('/admin/login')
        }
    }

    async deleteItem(req,res){
        if(req.session.user){
            if(req.session.user.role == 'Admin'){
                category.deleteItem(req)
            }

            res.redirect('/admin/category')
        }else{
            res.redirect('/admin/login')
        }
    }

    async paginateItem(req,res){
        if(req.session.user){
            req.settings.type = 'category'
            req.settings.items = await category.getItem(req,req.settings.dItemLimit)
            res.json(req.settings)
        }else{
            res.redirect('/admin/login')
        }
    }
}

export default new Category()