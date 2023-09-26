const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '下拉刷新',
      path: 'api-case/pull-down-refresh/pull-down-refresh'
    };
  },
  data: {
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false
    }
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
    apiData.content = JSON.stringify(content);
    this.setData({
      apiData
    });
  },
  startPullDownRefresh() {
    this.resetApiData();
    xhs?.startPullDownRefresh({
      success: res => {
        this.updateApiData('success', res);
      },
      fail: res => {
        this.updateApiData('fail', res);
      },
      complete: res => {
        this.updateApiData('complete', res);
      }
    });
  },
  stopPullDownRefresh() {
    this.resetApiData();
    xhs?.stopPullDownRefresh({
      success: res => {
        this.updateApiData('success', res);
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