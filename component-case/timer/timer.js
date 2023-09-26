Page({
  data: {
    value: '',
  },

  onShareAppMessage() {
    return {
      title: '定时器',
      path: 'packageAPI/pages/timer/timer',
    };
  },
  handle1() {
    const self = this;
    self.setData({ value: '' });
    if (!globalThis.setTimeout) {
      self.setData({ value: '不支持' });
    } else {
      globalThis.setTimeout(() => {
        console.log('支持');
        self.setData({ value: '支持' });
      }, 1000);
    }
  },
  handle2() {
    const self = this;
    self.setData({ value: '' });
    if (!globalThis.clearTimeout) {
      self.setData({ value: '不支持' });
    } else {
      self.setData({ value: '支持' });
    }
  },
  handle3() {
    const self = this;
    self.setData({ value: '' });
    if (!globalThis.setInterval) {
      self.setData({ value: '不支持' });
    } else {
      const handle = setInterval(() => {
        self.setData({ value: '支持' });
        if (clearInterval) {
          clearInterval(handle);
        }
      }, 4000);
    }
  },
  handle4() {
    const self = this;
    self.setData({ value: '' });
    if (!globalThis.clearInterval) {
      self.setData({ value: '不支持' });
    } else {
      self.setData({ value: '支持' });
    }
  },
});
