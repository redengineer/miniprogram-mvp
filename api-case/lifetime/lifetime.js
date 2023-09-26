let messageCount = 0;

Page({
  data: {
    message: [],
    height: '0',
    scrollTop: 0
  },

  onLoad() {
    this.pushMessage('onLoad');
  },
  onShow() {
    this.pushMessage('onShow');
  },
  onReady() {
    this.pushMessage('onReady');
  },
  onHide() {
    this.pushMessage('onHide');
  },
  onUnload() {
    this.pushMessage('onUnload');
  },
  onPullDownRefresh() {
    this.pushMessage('onPullDownRefresh');
  },
  onReachBottom() {
    this.pushMessage('onReachBottom');
  },
  onShareAppMessage() {
    this.pushMessage('onShareAppMessage');
  },
  onShareTimeline() {
    this.pushMessage('onShareTimeline');
  },
  onShareChat() {
    this.pushMessage('onShareChat');
  },
  onPageScroll() {
    this.pushMessage('onPageScroll');
  },
  onTabItemTap() {
    this.pushMessage('onTabItemTap');
  },

  pushMessage(name) {
    const msg = this.data.message;
    if (!msg.length) {
      this.setData('message', [{lifeName: name, count: 1}]);
      return;
    }

    const last = msg[msg.length - 1];

    if (last.lifeName === name) {
      last.count++;
      this.setData('message', [...msg]);
      return;
    }
    messageCount++;
    this.scrollToBottom();
    this.setData({
      message: [...msg, {lifeName: name, count: 1}]
    });
  },

  startPullDownRefresh() {
    xhs.startPullDownRefresh();
  },

  stopPullDownRefresh() {
    xhs.stopPullDownRefresh();
  },

  generateBox() {
    this.setData('height', '50vh');
  },

  notGenerateBox() {
    this.setData('height', '0');
  },

  scrollToBottom() {
    this.setData({
      scrollTop: 100 * messageCount
    });
  }
});
