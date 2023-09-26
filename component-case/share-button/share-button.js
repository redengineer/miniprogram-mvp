Page({
  onShareAppMessage() {
    return {
      title: '转发按钮',
      path: 'packageAPI/pages/share-button/share-button',
    };
  },
  handleTapShareButton() {
    if (!((typeof xhs?.canIUse === 'function') && xhs?.canIUse('button.open-type.share'))) {
      xhs?.showModal({
        title: '当前版本不支持转发按钮',
        content: '请升级至最新版本微信客户端',
        showCancel: false,
      });
    }
  },
});
