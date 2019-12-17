// 1. 获取数据库引用
var db = wx.cloud.database()
// collection 方法获取一个集合的引用
var msgCol = db.collection('message')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "",
    msgList: [],
    inpMsg: ""
  },
  onChange: function (event) {
    this.setData({
      message: event.detail
    })
  },
  saveMsg: function () {
    var _this = this;
    var timer = new Date();
    var timeStr = timer.getFullYear() + "-" + timer.getMonth() + "-" + timer.getDate()
    console.log(this.data.message, timeStr);

    msgCol.add({
      data: {
        message: _this.data.message,
        time: timeStr
      },
      success(res) {
        _this.getData()
      }
    })

  },
  getData: function () {
    var _this = this;
    msgCol.get({
      success(res) {
        console.log(res)
        _this.setData({
          msgList: res.data,
          inpMsg: ""
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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