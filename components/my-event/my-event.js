// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement(){
      this.triggerEvent('myevent', {}, {})
    }
  }
})
