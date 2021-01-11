const db = wx.cloud.database(); //初始化数据库
const fellow43_DB = db.collection('fellow43') // 获取要操作的数据库集合
const _ = db.command; //获取查询指令
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal: ''
  },
  getIptVal(e) {
    this.setData({
      inpVal: e.detail.value
    })
  },
  addHandle() {
    fellow43_DB.add({
      data: {
        msg: this.data.inpVal,
        isShow: true
      }
    }).then(res => {
      console.log(res);
    })
  },
  getHandle() {
    // 获取一个集合中的全部数据
    // fellow43_DB.get().then(res => console.log(res));

    // 获取集合中的部分数据
    // fellow43_DB.where({
    //   isShow:true
    // }).get().then(res=>console.log(res))

    // 获取集合中的部分数据（msg = hello & word ）
    // fellow43_DB.where({
    //   msg:_.in(['hello','word'])
    // }).get().then(res => {
    //   console.log(res);
    // })

    // 获取具体的某一条记录
    fellow43_DB.doc('b45a21d55ffbad17045f95545c2ec55c').get().then(res => console.log(res))
  },
  updateHandle() {
    console.log(666);
    fellow43_DB.doc('b45a21d55ffbad17045f95545c2ec55c').update({
      data: {
        isShow:true
      }
    }).then(res=>{console.log(res);})
  },
  delHandle() {
    fellow43_DB.doc('b45a21d55ffbad17045f95545c2ec55c').remove().then(res=>{console.log(res);})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})