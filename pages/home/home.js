
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0
  },

  handleIncrement(){
    this.setData({
      count:this.data.count + 1
    })
  },

  handleTabClick(event){
    console.log(event);
  },
  handleSel(){

    //获取组件对象 selectxComponent
    const my_sel = this.selectComponent('#sel-id');

    //1.通过setData 来修改组件数据
    // my_sel.setData({
    //   count: my_sel.data.count + 1
    // })

    //2.通过方法对数据进行修改
    my_sel.incrementCount(1)


  }

})