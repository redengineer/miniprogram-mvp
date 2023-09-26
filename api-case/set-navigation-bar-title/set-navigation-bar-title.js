const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '设置页面标题',
      path: 'packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title'
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
  handleTitle(e) {
    this.setData({
      title: e.detail.value
    });
  },
  setNaivgationBarTitle() {
    xhs?.setNavigationBarTitle({
      title: this.data.title,
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
    return false;
  }
}, __templateJs));