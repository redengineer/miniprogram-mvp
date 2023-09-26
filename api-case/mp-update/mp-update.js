const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  data: {
    shouldUpdate: ''
  },
  handleCheckUpdate(e) {
    this.setData({
      shouldUpdate: false
    });
  },
  onLoad() {
    const updateManager = xhs.getUpdateManager();
    updateManager.onCheckForUpdate(res => {
      xhs.showModal({
        title: '提示',
        content: JSON.stringify(res)
      });
    });
  }
}, __templateJs));