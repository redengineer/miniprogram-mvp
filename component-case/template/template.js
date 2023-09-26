Page({
  onShareAppMessage() {
    return {
      title: 'template',
      path: '/component-case/template/template',
    };
  },

  data: {
    value: '',
    value2: '',
  },
  
  onReady() {
    // debugger
    // setTimeout(() => {
     
    // }, 3000)
  },

  onClick() {
    this.setData('value', this.data.value2);
  },

  onClick2() {
    // const res = this.selectComponent('#child');
    // res.onClick();
    this.setData({
      value: '',
    });
  },

  onInput(e) {
    this.data.value2 = e.detail.value;
  },

  onMyevent() {
    this.onClick2();
  }
});
