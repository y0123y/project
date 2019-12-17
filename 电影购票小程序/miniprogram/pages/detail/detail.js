// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getData: function (id) {
    var _this = this;
    console.log(id);
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/elessar/subject/' + id,
      success(res) {
        _this.setData({
          detailInfo: res.data
        })
      }
    })
  },
  onLoad: function (options) {
    this.getData(options.id)
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