
//getApp()获取APP产生的示例对象
const app = getApp()
const name = app.globalData.name;
const age = app.globalData.age;
console.log(name,age)

// pages/home/home.js
Page({
  //----------1.监听数据初始 --------------
  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  //----------2.监听生命周期函数 --------------
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('onLoad');
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res);
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
    })
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow() {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady')
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('onUnload')
  },


  //----------3.监听wxml 页面中相关的一些事件 --------------
  handleGetUserInfo(event) {
    console.log('111111111')
    console.log(event)
  },

  //----------4.监听其他事件 --------------

  //滚动事件
  onPageScroll(obj){
    console.log(obj)
  },

  //页面上拉触底事件的处理函数
  onReachBottom() {
    console.log('页面滚动到底部')
  },

  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh() {
    console.log('下拉动作')
  },

 //用户点击右上角分享
  onShareAppMessage() {
    console.log('onShareAppMessage')
  }

})