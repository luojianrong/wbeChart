// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

//小程序授权&获取用户信息
  getUserInfo(res){
    const userInfo = res.detail.userInfo;
    if (userInfo){
      this.setData({
        userInfo
      })
    }
  },
  toList(){

    if (this.data.userInfo.avatarUrl){
      wx.navigateTo({
        url: '/pages/list/list'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //缓存用户信息
    wx.getUserInfo({
      success:(res)=>{
        //获取用户信息成功的回调
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail:()=>{
        wx.showToast({
          title: '请先登录',
          icon: "none"
        })
      }
    })

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