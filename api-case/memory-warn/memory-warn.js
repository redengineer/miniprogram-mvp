Page({
  onShareAppMessage() {
    return {
      title: 'memory-warn',
      path: 'package/API/pages/memory-warn/memory-warn',
    };
  },

  data: {
    value: '',
    memory: [],
  },
  resetValue() {
    this.setData({ value: '' });
  },
  bindSubscribe() {
    this.resetValue();
    xhs?.onMemoryWarning(e => {
      this.setData({ value: JSON.stringify(e) });
    });
    this.setData({ value: '订阅成功' });
  },
  bindUnSubscribe() {
    this.resetValue();
    xhs?.offMemoryWarning(() => {
      this.setData({ value: '取消成功' });
    });
  },
  bindMemory() {
    if (this.handle) {
      clearInterval(this.handle);
    } else {
      this.handle = setInterval(() => {
        const { memory } = this.data;
        for (let i = 0; i < 100; i++) {
          memory.push({ name: 'test', age: 20 });
        }
        this.setData({ memory });
      }, 1000);
    }
  },
});
