Component({
  properties: {
    message: {
      type: String
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    onTap() {
      this.triggerEvent('myevent', {
        data: '自定义组件内触发triggerEvent'
      });
    },

    onClear() {
      console.log('onClear com2', this);
      this.triggerEvent('myevent', {
        data: ''
      });
    }
  }
});
  