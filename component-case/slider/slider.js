const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
const pageData = {
  onShareAppMessage() {
    return {
      title: 'slider',
      path: 'page/component/pages/slider/slider'
    };
  },
  data: {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    value: 0,
    color: '#e9e9e9',
    selectedColor: '#1aad19',
    activeColor: '#1aad19',
    backgroundColor: 'transparent',
    blockSize: 28,
    blockColor: '#fff',
    showValue: false,
    onChangeValue: '',
    onChangeingValue: ''
  },
  changeMin({
    detail
  }) {
    this.setData({
      min: detail.value
    });
  },
  changeMax({
    detail
  }) {
    this.setData({
      max: detail.value
    });
  },
  changeStep({
    detail
  }) {
    this.setData({
      step: detail.value
    });
  },
  changeDisabled() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  changeValue({
    detail
  }) {
    this.setData({
      value: detail.value
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
  changeBlockSize({
    detail
  }) {
    this.setData({
      blockSize: detail.value
    });
  },
  changeBlockColor({
    detail
  }) {
    this.setData({
      blockColor: detail.value
    });
  },
  changeShowValue() {
    this.setData({
      showValue: !this.data.showValue
    });
  },
  onChange({
    detail
  }) {
    this.setData({
      onChangeValue: detail.value
    });
  },
  onChangeing({
    detail
  }) {
    this.setData({
      onChangeingValue: detail.value
    });
  }
};
for (let i = 1; i < 5; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function (e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value);
    };
  })(i);
}
Page(__mergePageOptions(pageData, __templateJs));