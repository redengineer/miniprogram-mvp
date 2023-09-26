Page({
  onShareAppMessage() {
    return {
      title: '监听罗盘数据',
      path: 'packageAPI/pages/on-compass-change/on-compass-change',
    };
  },

  data: {
    enabled: true,
    direction: 0,
  },
  onReady() {
    const that = this;
    xhs?.onCompassChange(res => {
      that.setData({
        direction: parseInt(res.direction, 10),
      });
    });
  },
  startCompass() {
    if (this.data.enabled) {
      return;
    }
    const that = this;
    xhs?.startCompass({
      success() {
        that.setData({
          enabled: true,
        });
      },
    });
  },
  stopCompass() {
    if (!this.data.enabled) {
      return;
    }
    const that = this;
    xhs?.stopCompass({
      success() {
        that.setData({
          enabled: false,
        });
      },
    });
  },
});
