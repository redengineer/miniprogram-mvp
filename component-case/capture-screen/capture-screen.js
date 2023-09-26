Page({
  onShareAppMessage() {
    return {
      title: '用户截屏事件',
      path: 'packageAPI/pages/capture-screen/capture-screen',
    };
  },

  data: {
    captured: false,
  },
  onLoad() {
    xhs?.onUserCaptureScreen(() => {
      this.setData({
        captured: true,
      });
    });
  },
});
