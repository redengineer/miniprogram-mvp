const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: 'progress',
      path: 'page/component/pages/progress/progress'
    };
  },
  data: {
    percent: 20,
    tmpPercent: 20,
    showInfo: false,
    borderRadius: 0,
    fontSize: 16,
    strokeWidth: 6,
    activeColor: 'red',
    backgroundColor: '#EBEBEB',
    active: false,
    activeMode: false,
    // false:backwards true: forwards
    duration: 30,
    activeend: ''
  },
  changeTmpPercent({
    detail
  }) {
    this.setData({
      tmpPercent: detail.value
    });
  },
  confirmChangePercent() {
    this.setData({
      percent: this.data.tmpPercent
    });
  },
  changeShowInfo() {
    this.setData({
      showInfo: !this.data.showInfo
    });
  },
  changeBorderRadius({
    detail
  }) {
    this.setData({
      borderRadius: parseInt(detail.value, 10)
    });
  },
  changeFontSize({
    detail
  }) {
    this.setData({
      fontSize: parseInt(detail.value, 10)
    });
  },
  changeStrokeWidth({
    detail
  }) {
    this.setData({
      strokeWidth: parseInt(detail.value, 10)
    });
  },
  changeActiveColor({
    detail
  }) {
    this.setData({
      activeColor: detail.value
    });
  },
  changeBackgroundColor({
    detail
  }) {
    this.setData({
      backgroundColor: detail.value
    });
  },
  changeActive() {
    this.setData({
      active: !this.data.active
    });
  },
  changeActiveMode() {
    this.setData({
      activeMode: !this.data.activeMode
    });
  },
  changeDuration({
    detail
  }) {
    this.setData({
      duration: parseInt(detail.value, 10)
    });
  },
  changeActiveend(e) {
    this.setData({
      activeend: JSON.stringify(e, null, 2)
    });
  }
}, __templateJs));