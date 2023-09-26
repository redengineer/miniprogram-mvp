const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    if (this.data.promise) {
      const promise = Promise.resolve({
        title: '自定义转发标题Promise',
        desc: '自定义转发描述Promise',
        path: '/api-case/share/share'
      });
      return {
        ...this.data.shareData,
        promise
      };
    }
    return {
      ...this.data.shareData
    };
  },
  data: {
    shareData: {
      title: '自定义转发标题',
      desc: '自定义转发描述',
      path: '/api-case/share/share',
      imageUrl: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baiduyun@2x-e0be79e69e.png'
    },
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false
    },
    promise: false
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
  showShareMenu() {
    this.resetApiData();
    xhs.showShareMenu({
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
  hideShareMenu() {
    this.resetApiData();
    xhs.hideShareMenu({
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
  handleTitle(e) {
    this.setData({
      shareData: {
        ...this.data.shareData,
        title: e.detail.value
      }
    });
  },
  handleImageUrl(e) {
    this.setData({
      shareData: {
        ...this.data.shareData,
        imageUrl: e.detail.value
      }
    });
  },
  handlePromise(e) {
    this.setData({
      promise: e.detail.value
    });
  }
}, __templateJs));