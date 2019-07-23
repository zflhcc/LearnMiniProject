// export default function request(options) {
//    return new Promise((resolve, reject) => {
//      wx.request({
//        url: options.url,
//        method: options.method || 'get',
//        data: options.data || {},
//        success: (res) => {
//          resolve(res)
//        },
//        fail: (err) => {
//          reject(err)
//        }
//      })
//    })
// }

//简洁版本
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}