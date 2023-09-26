const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '收货地址',
      path: 'packageAPI/pages/choose-address/choose-address'
    };
  },
  data: {
    addressInfo: null
  },
  chooseAddress() {
    xhs?.chooseAddress({
      success: res => {
        console.log('res:', res);
        this.setData({
          addressInfo: res
        });
      },
      fail(err) {
        console.log('err:', err);
      }
    });
  }
}, __templateJs));