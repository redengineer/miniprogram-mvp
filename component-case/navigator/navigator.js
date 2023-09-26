Page({
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
    console.log('------', content);
    const apiData = { ...this.data.apiData };
    apiData[type] = true;
    apiData.content = content;
    this.setData({ apiData });
  },

  navigateTo() {
    xhs?.navigateTo({
      url: './navigator',
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

  navigateToError() {
    xhs?.navigateTo({
      url: './navigatorerror',
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
    xhs?.navigateBack({
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

  navigateBack1() {
    xhs?.navigateBack({
      delta: -1,
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
    xhs?.redirectTo({
      url: './navigator',
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

  redirectToError() {
    xhs?.redirectTo({
      url: './navigatorxxxx',
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

  switchTab() {
    xhs?.switchTab({
      url: '/page/component/index',
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

  switchTabError() {
    xhs?.switchTab({
      url: '/page/component/indexerror',
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
    xhs?.reLaunch({
      url: '/page/component/index',
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

  reLaunchError() {
    xhs?.reLaunch({
      url: '/page/component/indexerror',
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
