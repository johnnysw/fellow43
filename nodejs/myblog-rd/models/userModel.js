
const db = require('../models/db');

module.exports = {
    getByNameAndPwd(username, password){
        return db.query('select * from t_user where username=? and password=?', [username, password]);
    }   
}