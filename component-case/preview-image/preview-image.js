Page({
  onShareAppMessage() {
    return {
      title: 'previewImage',
      path: 'packageAPI/pages/set-tab-bar-item/set-tab-bar-item',
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
    apiData.content = content;
    this.setData({ apiData });
  },
});
