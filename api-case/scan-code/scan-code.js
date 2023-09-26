const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '扫码',
      path: 'packageAPI/pages/scan-code/scan-code'
    };
  },
  data: {
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false
    },
    content: ''
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
  scanCode() {
    xhs.scanCode({
      success: res => {
        this.setData({
          content: JSON.stringify(res)
        });
      },
      fail: res => {
        this.updateApiData('fail', res);
      },
      complete: res => {
        this.updateApiData('complete', res);
      }
    });
  }
}, __templateJs));