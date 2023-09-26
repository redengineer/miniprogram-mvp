Page({
  onShareAppMessage() {
    return {
      title: '监听手机网络变化',
      path: 'packageAPI/pages/on-network-status-change/on-network-status-change',
    };
  },

  data: {
    isConnected: false,
  },

  onLoad() {
    const that = this;
    xhs?.onNetworkStatusChange(res => {
      console.log('res----------', res);
      that.setData({
        isConnected: res.isConnected,
        networkType: res.networkType,
      });
    });
  },
  onShow() {
    const that = this;
    xhs?.getNetworkType({
      success(res) {
        that.setData({
          isConnected: res.networkType !== 'none',
          networkType: res.networkType,
        });
      },
    });
  },
});
