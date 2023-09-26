const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  data: {
    config: ''
  },
  getExtConfig() {
    xhs.getExtConfig({
      success: res => {
        this.setData({
          content: JSON.stringify(res)
        });
      },
      fail: res => {}
    });
  },
  getExtConfigSync() {
    const data = xhs.getExtConfigSync();
    this.setData({
      content: JSON.stringify(data)
    });
  }
}, __templateJs));