import request from '../../servers/network.js'
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
    console.log('onLoad');

    //1.原生方式发送请求
    this.get_data()

    //2.使用封装的request 发送请求

    request({
      url: 'http://123.207.32.32:8000/recommend'
    }).then(res =>{
      console.log(res)
    }).catch( err => {
      console.log(err)
    })

  },

  get_data(){
    //发送网络请求 get
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
      }
    }),

      //发送网络请求 get 请求  携带参数
      wx.request({
        url: 'http://123.207.32.32:8000/home/data',
        data: {
          type: 'sell',
          page: 1
        },
        success: (res) => {
          console.log(res)
        }
      }),

      //发送网络请求 get 请求  携带参数
      wx.request({
        url: 'http://httpbin.org/post',
        method: 'post',
        data: {
          name: 'sell',
          age: 18
        },
        success: (res) => {
          console.log(res)
        },
        fail: (err) => {
          console.log(err)
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
  }
})