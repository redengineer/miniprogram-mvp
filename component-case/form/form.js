Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form',
    };
  },

  data: {
    pickerHidden: true,
    chosen: 'YYYY-MM-DD',
    switch: true,
  },

  pickerConfirm(e) {
    this.setData({
      pickerHidden: true,
    });
    this.setData({
      chosen: e.detail.value,
    });
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true,
    });
  },

  pickerShow() {
    this.setData({
      pickerHidden: false,
    });
  },

  formSubmit(e) {
    xhs.showModal({
      title: '提交成功',
      content: '携带的数据为：' + JSON.stringify(e.detail.value)
    });
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value);
    this.setData({
      chosen: 'YYYY-MM-DD',
      switch: true,
    });
  },
});
