// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const fellow43_db = db.collection('fellow43')
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  if (event.type === 'finish') {
    // 更新
    return await fellow43_db.where({
      _id: _.in(event.idList)
    }).update({
      data: {
        isDone: true
      }
    })
  } else {
    // 删除
    return await fellow43_db.where({
      _id: _.in(event.idList)
    }).remove()
  }
}