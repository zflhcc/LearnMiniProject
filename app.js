//app.js
App({
   //小程序初始化完成，会执行的生命周期函数
  onLaunch: function () {

  },

  //小程序界面显示完成后执行的生命周期函数
  onShow: function (options){
    //判断小程序进入场景
    switch (options.scene){
      case 1001:
        break;
      case 1025:
        break;
    }

    //获取用户信息，传递用户信息
    wx.getUserInfo({
      success: function(res){
      }
    })
    
  },

  //小程序关闭，会执行的生命周期函数
  onHide: function(){
    
  },

  //小程序发生错误，会执行的生命周期函数
  onError: function(){
    console.log('发生错误: onError');
  },

  //全景数据
  globalData: {
    name: 'zhangsan',
    age: 18
  }
})