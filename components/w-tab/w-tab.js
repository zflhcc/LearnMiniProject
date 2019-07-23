// components/w-tab/w-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tab:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCruIndex(event){

      //获取index
      const index = event.currentTarget.dataset.index;

      //改变curIndex的值
      this.setData({
        curIndex:index
      })

      //通知页面内部的点击事件
      this.triggerEvent('tabclick',{index, title:this.properties.tab[index]},{})

    }
  }
})
