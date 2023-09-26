const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '打电话',
      path: 'packageAPI/pages/make-phone-call/make-phone-call'
    };
  },
  data: {
    disabled: true,
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false
    }
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
  bindInput(e) {
    this.inputValue = e.detail.value;
    if (this.inputValue.length > 0) {
      this.setData({
        disabled: false
      });
    } else {
      this.setData({
        disabled: true
      });
    }
  },
  makePhoneCall() {
    this.resetApiData();
    xhs?.makePhoneCall({
      phoneNumber: this.inputValue,
      success: e => {
        this.updateApiData('success', e);
      },
      fail: e => {
        this.updateApiData('fail', e);
      },
      complete: e => {
        this.updateApiData('complete', e);
      }
    });
  }
}, __templateJs));