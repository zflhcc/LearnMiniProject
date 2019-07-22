
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:['衣服','裤子','鞋子'],
    currentIndex: 0,
  },

  handleTouchStart(){
    console.log('handleTouchStart')
  },

  handleTouchMove() {
    console.log('handleTouchMove')
  },

  handleTouchEnd() {
    console.log('handleTouchEnd')
  },

  handleLongPress() {
    console.log('handleLongPress')
  },

  handleTap() {
    console.log('handleTap')
  },

  handleEventClick(event){
    console.log(event)
  },
  handleInner(event){
    console.log(event)
  },
  handleOuter(event) {
    console.log(event)
  },
  handleItem(event){
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const title = dataset.title;

    this.setData({
      currentIndex:index
    })
  },
  handleCaptureView1(){
    console.log('handleCaptureView1')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  }

})