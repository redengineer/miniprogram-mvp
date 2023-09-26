Page({
  data: {
    value: '',
  },

  onShareAppMessage() {
    return {
      title: 'eval',
      path: 'packageAPI/pages/eval/eval',
    };
  },
  handle() {
    const self = this;
    self.setData({ value: '' });
    if (!globalThis.eval) {
      self.setData({ value: '不支持' });
    } else {
      self.setData({ value: '支持' });
    }
  },
});
