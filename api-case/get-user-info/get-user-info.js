const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '获取用户信息',
      path: 'packageAPI/pages/get-user-info/get-user-info'
    };
  },
  data: {
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false
    },
    info: ''
  },
  resetApiData() {
    this.setData({
      apiData: {
        success: false,
        fail: false,
        complete: false,
        content: ''
      }
    });
  },
  updateApiData(type, content) {
    const apiData = {
      ...this.data.apiData
    };
    apiData[type] = true;
    apiData.content = content;
    this.setData({
      apiData
    });
  },
  getUserInfo(e) {
    this.setData({
      info: JSON.stringify(e)
    });
  }
}, __templateJs));