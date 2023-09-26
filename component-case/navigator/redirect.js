Page({
  onShareAppMessage() {
    return {
      title: 'redirectPage',
      path: 'page/component/pages/navigator/redirect',
    };
  },

  onLoad(options) {
    console.log('onLoad:=====query:', options);
    this.setData({
      title: options.title,
    });
  },
});
