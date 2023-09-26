const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '获取手机系统信息',
      path: '/api-case/get-system-info/get-system-info'
    };
  },
  data: {
    systemInfo: {}
  },
  getSystemInfo() {
    xhs.getSystemInfo({
      success: res => {
        this.setData({
          systemInfo: res
        });
      },
      fail: res => {},
      complete: res => {}
    });
  },
  getSystemInfoSync() {
    const data = xhs.getSystemInfoSync();
    this.setData({
      systemInfo: data
    });
  }
}, __templateJs));