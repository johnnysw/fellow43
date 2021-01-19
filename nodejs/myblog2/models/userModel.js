const db = require('./db')

module.exports = {
    getAllUsers(){
        //...数据库相关操作
        //return db.query('select * from xxx where yyy=? and zzz=?', [yyy, zzz])
        return db.query('select * from t_user');
    },
    getUserById(){

    },
    getUserByNameAndPwd(){

    },
    saveUser(){

    },
    deleteUser(){

    },
    updateUser(){

    }


}