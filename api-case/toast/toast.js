const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '消息提示框',
      path: 'packageAPI/pages/toast/toast'
    };
  },
  data: {
    duration: 3000,
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false
    }
  },
  handleDuration(e) {
    this.setData({
      duration: e.detail.value - 0
    });
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
  common(options) {
    this.resetApiData();
    xhs?.showToast({
      ...options,
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
  toast1Tap() {
    this.common({
      title: '默认',
      icon: 'none'
    });
  },
  toast2Tap() {
    this.common({
      icon: 'none',
      title: `duration ${this.data.duration}`,
      duration: this.data.duration
    });
  },
  toast3Tap() {
    this.common({
      title: 'loading',
      icon: 'loading',
      duration: this.data.duration
    });
  },
  toast4Tap() {
    this.common({
      title: 'loading',
      image: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baobaozhidao@2x-af409f9dbe.png',
      duration: this.data.duration
    });
  },
  toast5Tap() {
    this.common({
      title: 'loading',
      mask: true,
      duration: this.data.duration
    });
  },
  toast6Tap() {
    this.common({
      title: 'loading',
      icon: 'loading',
      image: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baobaozhidao@2x-af409f9dbe.png',
      duration: this.data.duration
    });
  },
  toast7Tap() {
    this.common({
      title: '测试😁'
    });
  },
  hideToast() {
    this.resetApiData();
    xhs?.hideToast({
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