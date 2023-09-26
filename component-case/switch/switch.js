const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: 'switch',
      path: 'page/component/pages/switch/switch'
    };
  },
  data: {
    checked: false,
    disabled: false,
    type: 'switch',
    color: '#09BB07',
    curValue: false
  },
  switch1Change(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);
  },
  switch2Change(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value);
  },
  changeChecked() {
    this.setData({
      checked: !this.data.checked
    });
  },
  changeDisabled() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  changeColor({
    detail
  }) {
    this.setData({
      color: detail.value
    });
  },
  changeType({
    detail
  }) {
    this.setData({
      type: detail.value
    });
  },
  changeValue({
    detail
  }) {
    // 点击switch组件才会触发change
    this.setData({
      curValue: detail.value
    });
  }
}, __templateJs));