// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listItem: [],
    num: 0,
    total: 0
  },
  goDetail: function (event) {
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  isRefresh: function (isRefresh) {
    var _this = this;
    var listLength = this.data.listItem.length;
    var total = this.data.total;
    if (isRefresh == "refresh") {
      _this.setData({
        listItem: [],
        num: 0
      }, function () {
        _this.getData()
      })
    } else if (listLength >= total && total != 0) {
      wx.showToast({
        title: '无数据',
        icon: 'none',
        duration: 1000
      })
    } else {
      _this.getData();
    }
  },

  getData: function () {
    wx.showLoading({
      title: '加载中···',
    })
    var _this = this;
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=' + this.data.num + '&count=10',
      success(res) {
        console.log(res)
        var thisList = res.data.subject_collection_items;
        console.log(res.data.subject_collection_items);
        // listItem = thisList
        _this.setData({
          listItem: _this.data.listItem.concat(thisList),
          num: _this.data.num + 10,
          total: res.data.total
        }, function () {
          wx.hideLoading();
          wx.stopPullDownRefresh();
        })
      }
    })
  },
  onLoad: function (options) {
    this.getData();
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
    this.isRefresh("refresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.isRefresh();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})