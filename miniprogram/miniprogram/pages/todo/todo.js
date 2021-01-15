const db = wx.cloud.database();
const fellow43_db = db.collection('fellow43')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal: '',
    todoList: [],
    isDone: false,
    idList: []
  },
  getVal(e) {
    this.setData({
      inpVal: e.detail.value
    })
  },
  add() {
    if (this.data.inpVal) {
      fellow43_db.add({
        data: {
          title: this.data.inpVal,
          isDone: false,
          isTodo: true
        }
      }).then(res => {
        this.getTodoList()
        this.setData({
          inpVal: ''
        })
      })
    } else {
      wx.showToast({
        title: '待办事项不能为空',
        icon: 'none',
        duration: 2000
      })
      
    }
  },
  getTodoList() {
    fellow43_db.where({
      isDone: this.data.isDone,
      isTodo: true
    }).get().then(res => {
      this.setData({
        todoList: res.data
      })
    })
  },
  finish(e) {
    fellow43_db.doc(e.target.dataset.id).update({
      data: {
        isDone: true
      }
    }).then(res => {
      this.getTodoList()
    })
  },
  delete(e) {
    fellow43_db.doc(e.target.dataset.id).remove().then(res => {
      this.getTodoList()
    })
  },
  isDoneChange(e) {
    this.setData({
      isDone: e.detail.value
    })
    this.getTodoList()
  },
  batchHandle(e) {
    let type = e.target.dataset.type
    wx.cloud.callFunction({
      name: 'fellow43_todo',
      data: {
        type: type,
        idList: this.data.idList
      }
    }).then(res => {
      this.getTodoList()
    })
  },
  checkChange(e) {
    this.setData({
      idList: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTodoList()
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