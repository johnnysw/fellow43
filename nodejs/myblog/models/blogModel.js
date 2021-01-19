const db = require("./db");

module.exports = {
    getBlogs(){
        return db.query(`SELECT * FROM t_blog`);
    }
};