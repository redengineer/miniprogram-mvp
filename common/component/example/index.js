Component({
  properties: {
    value: Number
  },

  data: {
    value2: ''
  },

  methods: {
    onClick() {
      this.triggerEvent('myevent');
    }
  },

  observers: {
    value: function(value) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        value2: value && '[' + value + ']' 
      });
    }
  }
});
