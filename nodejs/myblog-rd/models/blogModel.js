const db = require('../models/db');

module.exports = {
    saveBlog(title, content, userId){
        return db.query('insert into t_blog set ?', {
            title, 
            content, 
            user_id: userId
        });
    },
    getBlogs(){
        return db.query("select * from t_blog order by post_time desc");
    }
}