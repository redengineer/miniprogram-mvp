Page({

  onShareAppMessage() {
    return {
      title: navigationBarTitleText,
      path: '/api-case/webview/webview',
    };
  },

  data: {
    color: 'red',
    num: 0
  },


  onChangeColor() {
    console.log('onChangeColor');
    this.setData({
      color: this.data.color === 'red' ? 'blue': 'red',
      num: this.data.num+1
    });
  }
});