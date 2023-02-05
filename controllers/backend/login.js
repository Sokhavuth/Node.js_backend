//controllers/backend/login.js

import settings from '../../settings.js'
 
export default (req,res)=>{
    if(req.session.user){
        res.redirect('/backend/post')
    }else{
        settings.pageTitle = 'ទំព័រ​ចុះ​ឈ្មោះ'
        settings.message = ''
        settings.route = '/backend/login'
  
        res.render('base', {data:settings})
    }
}