const { navigationBarTitleText } = require('./webview.json');

Page({
  onShareAppMessage() {
    return {
      title: navigationBarTitleText,
      path: '/api-case/webview/webview',
    };
  },

  data: {
  },

  handleMessage(event) {
    const detail = event.detail;
    const data = detail.data || [];
    console.log(event);
    let content = '';
    for (let i of data) {
      if (typeof i === 'object') {
        content += '类型：object\n';
        content += JSON.stringify(i);
      } else {
        content += '类型：string\n';
        content += i;
      }
      content += '\n';
      content += '-----';
      content += '\n';
    }

    xhs.showModal({
      title: `接受到来自webview的${data.length}条消息`,
      content: content
    });
  }
});
