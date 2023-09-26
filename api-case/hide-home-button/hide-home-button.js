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
    const apiData = { ...this.data.apiData };
    apiData[type] = true;
    apiData.content = content;
    this.setData({ apiData });
  },

  hideHomeButton() {
    this.resetApiData();
    xhs.hideHomeButton({
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
