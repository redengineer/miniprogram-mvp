const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: 'loading弹窗',
      path: 'packageAPI/pages/loading/loading'
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
    apiData.content = content;
    this.setData({
      apiData
    });
  },
  common(config) {
    this.resetApiData();
    xhs?.showLoading({
      ...config,
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
  title() {
    this.common({
      title: 'loading'
    });
  },
  fail() {
    this.common({
      title: '自定义文案'
    });
  },
  mask() {
    this.common({
      title: 'loading',
      mask: true
    });
    setTimeout(() => {
      xhs.hideLoading({});
    }, 2000);
  },
  hide() {
    this.resetApiData();
    xhs?.hideLoading({
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