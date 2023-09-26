const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '设置页面颜色',
      path: 'packageAPI/pages/set-navigation-bar-title/set-navigation-bar-color'
    };
  },
  data: {
    frontColor: '#000000',
    backgroundColor: '#00ff00',
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
  common(options) {
    this.resetApiData();
    xhs?.setNavigationBarColor({
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
  handleFrontColor(e) {
    this.setData({
      frontColor: e.detail.value || ''
    });
  },
  handleBackgroundColor(e) {
    this.setData({
      backgroundColor: e.detail.value || ''
    });
  },
  setNavigationBarColor1() {
    this.common({
      frontColor: this.data.frontColor,
      backgroundColor: this.data.backgroundColor
    });
  },
  setNavigationBarColor3() {
    this.common({
      frontColor: this.data.frontColor,
      backgroundColor: this.data.backgroundColor,
      animation: {
        duration: 2000,
        timingFunc: 'linear'
      }
    });
  },
  fail() {
    this.common({
      frontColor: 123
    });
  }
}, __templateJs));