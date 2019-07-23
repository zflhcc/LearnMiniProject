const TOKEN = 'token'
//app.js
App({
  globalData: {
    token: ''
  },

  onLaunch: function(){
    //先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    //判断token是否有值

    if( token && token.length !== 0 ){
      // this.check_token(token)
      this.check(token);
      
    }else{
      this.login();
      
    }
  },

  check(token) {
    console.log('验证')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: res => {
        if(!res.data.errCode){
          console.log('token有效')
          this.globalData.token = token;
        }else{
          this.login()
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  login(){
    console.log('登录')
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        //1.获取code
        const code = res.code;

        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: res => {
            //取出token
            const token = res.data.token;
            //将token 保存到globalData
            this.globalData.token = token;

            //将token保存在本地
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }

})