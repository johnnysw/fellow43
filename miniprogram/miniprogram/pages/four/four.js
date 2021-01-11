// miniprogram/pages/four/four.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  callCloud() {
    wx.cloud.callFunction({
        // 云函数名称
        name: 'fellow43',
        // 传给云函数的参数
        data: {
          a: 1,
          b: 2,
        },
      }).then(res => {
        console.log(res) // 3
      })
      .catch(console.error)
  },
  getCloud() {
    wx.cloud.callFunction({
      name: 'fellow43'
    }).then(res => {
      console.log(res);
    }).catch(console.error)
  },
  updateCloud() {
    wx.cloud.callFunction({
      name:'fellow43_update'
    }).then(res => {
      console.log(res);
    })
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