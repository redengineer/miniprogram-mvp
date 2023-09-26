Component({
  options: {
    styleIsolation: 'shared'
  },
  properties: {
    
  },
  data: {
    childDataMessage: '',
    // 这里是一些组件内部数据
    childMessage: '',
    someData: {}
  },
  methods: {
    handleClick() {
      const com2 = this.selectComponent('#com2');
      console.log('com2', com2);
    },

    handleEventMessage() {
      this.setData('childDataMessage', '修改了传给子组件的data');
    },
    
    onChildMessage(e) {
      this.setData('childMessage', `收到子组件的事件detail：${e.detail.data}`);
    },

    onClear() {
      console.log('onClear', this);
      this.setData('childMessage', '');
      this.setData('childDataMessage', '');
    },

    handleSelectMessage() {
      const com2 = this.selectComponent('#com2');
      com2.onTap();
    }
  },
});
  