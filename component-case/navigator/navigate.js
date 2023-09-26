Page({
  onShareAppMessage() {
    return {
      title: 'navigatePage',
      path: 'page/component/pages/navigator/navigate',
    };
  },

  data: {
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false,
    },
  },

  resetApiData() {
    this.setData({
      apiData: {
        success: false,
        fail: false,
        complete: false,
        content: '',
      },
    });
  },

  updateApiData(type, content) {
    const apiData = { ...this.data.apiData };
    apiData[type] = true;
    apiData.content = `${content}`;
    this.setData({ apiData });
  },

  onLoad(options) {
    console.log('onLoad:=====query:', options);
    this.setData({
      title: options.title,
    });
  },

  switchTab() {
    this.resetApiData();
    xhs.switchTab({
      url: '/page/API/index?sdsdsd=123',
      success: res => {
        this.updateApiData('success', res);
      },
      fail: res => {
        this.updateApiData('fail', res);
      },
      complete: res => {
        this.updateApiData('complete', res);
      },
    });
  },

  reLaunch() {
    xhs.reLaunch({
      url: '/page/component/index?fdgsd=12323',
      success: res => {
        this.updateApiData('success', res);
      },
      fail: res => {
        this.updateApiData('fail', res);
      },
      complete: res => {
        this.updateApiData('complete', res);
      },
    });
  },

  navigateBack() {
    xhs.navigateBack({
      delta: 2,
      success: res => {
        this.updateApiData('success', res);
      },
      fail: res => {
        this.updateApiData('fail', res);
      },
      complete: res => {
        this.updateApiData('complete', res);
      },
    });
  },

  navigateTo() {
    xhs.navigateTo({
      url: 'page/component/pages/navigator/navigate?navi=123',
      success: res => {
        this.updateApiData('success', res);
      },
      fail: res => {
        this.updateApiData('fail', res);
      },
      complete: res => {
        this.updateApiData('complete', res);
      },
    });
  },

  redirectTo() {
    xhs.redirectTo({
      url: 'page/component/pages/navigator/navigate?navi=123',
      success: res => {
        this.updateApiData('success', res);
      },
      fail: res => {
        this.updateApiData('fail', res);
      },
      complete: res => {
        this.updateApiData('complete', res);
      },
    });
  },
});
