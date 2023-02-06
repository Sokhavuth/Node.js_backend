//controllers/backend/post.js

class Post{
    async getPage(req,res){
        req.settings.pageTitle = 'ទំព័រ​ការផ្សាយ'
        req.settings.message = ''
        req.settings.route = '/admin/post'
  
        res.render('base', {data:req.settings})
    }
}

export default new Post()