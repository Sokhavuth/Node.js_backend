//controllers/backend/login.js

import user from '../../models/user.js'
import bcrypt from 'bcryptjs'
 
class Login{
    async getPage(req,res){
        if(req.session.user){
            res.redirect('/admin/post')
        }else{
            req.settings.pageTitle = 'ទំព័រ​ចុះ​ឈ្មោះ'
            req.settings.message = ''
            req.settings.route = '/admin/login'
  
            res.render('base', {data:req.settings})
        }
    }

    async verifyUser(req,res){
        let result = await user.checkUser(req,res)
      
        if(result){
            if(bcrypt.compareSync(req.body.password, result.password)){
                req.session.user = { id:result.id, role:result.role }
                res.redirect('/admin/post')
            }else{
                req.settings.message = 'ពាក្យ​សំងាត់​មិន​ត្រឹមត្រូវ​ទេ'
                req.settings.route = '/admin/login'
                res.render('base',{data:req.settings})
            }
        }else{
            req.settings.message = 'Email មិន​ត្រឹមត្រូវទេ'
            req.settings.route = '/admin/login'
            res.render('base',{data:req.settings})
        }
    }
}

export default new Login()