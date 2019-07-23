// components/my-mslot/my-mslot.js
Component({
  // ----properties  让使用者给组件传入数据
  properties: {
    title: {
      type: String,
      value: ''
    }
  },

  //初始数据
  data: {
    count: 0
  },

  //定义组件内部函数
  methods: {

  },

  //组件的配置选项
  // multipleSlots: 插槽时需要配置 true
  //styleIsolation 设置样式的隔离方式
  options: {
    multipleSlots: true
  },

  //外界给组件传入额外的样式
  externalClasses: ['titleclass'],

  //监听properties/data 的改变
  observers: {
    count: (newVal) => {
      console.log(newVal)
    }
  },

  //组件中监听生命周期函数

  //  1.监听所在页面的生命周期
  pageLifetimes: {
    show(){
      console.log('监听组件所在页面显示出来时')
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时')
    },
    resize() {
      console.log('监听页面尺寸改变')
    }
  },
  //  2.监听组件本身的生命周期

  lifetimes:{
    created(){
      console.log('组件被创建')
    },
    attached() {
      console.log('组件被添加到页面是')
    },
    ready() {
      console.log('组件渲染出来')
    },
    moved() {
      console.log('组件被移到另一个节点时')
    },
    dettached() {
      console.log('组件被移除')
    }
  }

  
})
