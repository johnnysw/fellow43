let mysql = require("mysql");
let {HOST, USER, PASSWORD, DATABASE} = require('../config/db.config')

let pool = mysql.createPool({
  connectionLimit: 10,
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

module.exports = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          // not connected!
          reject(err);
        } else {
          connection.query(sql, values, function (error, results) {
            connection.release(); //释放连接，放回pool中
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        }
      });
    });
  },
};
