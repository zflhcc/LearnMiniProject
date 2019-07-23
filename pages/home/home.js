
// pages/home/home.js
Page({

  handleToast(){
    wx.showToast({
      title: '加载中ing',
      duration: 3000,
      icon: 'loading',
      image:'',
      mask: true,

      success: ()=> {
        console.log('成功')
      },
      fail: ()=> {
        console.log('失败')
      },
      complete: ()=> {
        console.log('完成')
      }
    })
  },

  handleModel(){
    wx.showModal({
      title: '小程序',
      content: '小程序内容',
      // showCannel: false,
      cancelText: '退出',
      cancelColor: '#ff0000',
      success: (res) => {
        console.log(res)
        if (res.cancel){
          console.log('用户点击了取消')
        }
        if (res.confirm) {
          console.log('用户点击了确定')
        }
      }
    })
  },

  handleLoading(){
    wx.showLoading({
      title: '加载中',
      mask: true,

      success: () => {
        console.log('成功')
      },
      fail: () => {
        console.log('失败')
      },
      complete: () => {
        console.log('完成')
      }
    })

    setTimeout(() => {
      wx.hideLoading()
    }, 2000)

  },

  handleActionSheet(){
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }

  

 
})