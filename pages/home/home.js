
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res)=>{
        console.log(res)
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
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title: '您好',
      path: 'pages/about/about',
      imageUrl: 'http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg'
    }
  }

})
