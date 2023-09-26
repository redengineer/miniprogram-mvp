const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '剪切板',
      path: 'packageAPI/pages/clipboard-data/clipboard-data'
    };
  },
  data: {
    value: 'edit and copy me',
    pasted: ''
  },
  valueChanged(e) {
    this.setData({
      value: e.detail.value
    });
  },
  copy() {
    xhs?.setClipboardData({
      data: this.data.value,
      success: res => {},
      fail: res => {}
    });
  },
  paste() {
    xhs.getClipboardData({
      success: res => {
        this.setData({
          pasted: res.data
        });
      },
      fail: res => {}
    });
  }
}, __templateJs));