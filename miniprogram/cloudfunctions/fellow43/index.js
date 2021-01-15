// 云函数入口文件
const cloud = require('wx-server-sdk')//包，使得当前云函数支持小程序的语法

cloud.init()//初始化云函数
const db = cloud.database()// 初始化数据库
const fellow43_DB = db.collection('fellow43')// 获取要操作的集合

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(999);
  let res = await fellow43_DB.get();
  return res;
}