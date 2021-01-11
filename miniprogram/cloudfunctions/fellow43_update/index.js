// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init();
const db = cloud.database();
const fellow43_DB = db.collection('fellow43')

// 云函数入口函数
exports.main = async (event, context) => {
  let res = await fellow43_DB.where({
    isShow: true
  }).update({
    data: {
      isShow: false
    }
  })

  return
}