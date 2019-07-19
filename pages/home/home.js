
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好小程序',
    firstname: 'kobe',
    lastname: 'bryant',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    scrore: 45,
    moives: ['扫毒','星际穿越','流浪地球'],
    moiveNum: [
      ['111', '222', '333'],
      ['扫毒', '星际穿越', '流浪地球'],
      ['aaa', 'bbb', 'ccc']
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },

  handleColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },

  handleShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleAdd() {
    this.setData({
      scrore: this.data.scrore + 5
    })
  }

  
})