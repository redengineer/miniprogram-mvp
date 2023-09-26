const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: 'checkbox',
      path: 'page/component/pages/checkbox/checkbox'
    };
  },
  data: {
    items: [{
      value: 'USA',
      name: '美国'
    }, {
      value: 'CHN',
      name: '中国',
      checked: 'true'
    }, {
      value: 'BRA',
      name: '巴西'
    }, {
      value: 'JPN',
      name: '日本'
    }, {
      value: 'ENG',
      name: '英国'
    }, {
      value: 'FRA',
      name: '法国'
    }],
    curValue: '',
    checked: true,
    disabled: false,
    color: 'red',
    radio1Checked: false,
    radio2Checked: true,
    r1: true,
    r2: true,
    r3: true,
    isAgree: false
  },
  changeAgree(e) {
    xhs.showToast({
      icon: 'none',
      title: '您第一次点击同意'
    });
    console.log('changeAgree', e);
    // this.setData({
    //   isAgree: !this.data.isAgree
    // })
  },

  continue() {
    if (this.data.isAgree) {
      xhs.showToast({
        icon: 'none',
        title: '您已同意'
      });
    } else {
      xhs.showToast({
        icon: 'none',
        title: '您还没有点击同意'
      });
    }
  },
  changeisAgree() {
    this.setData({
      isAgree: !this.data.isAgree
    });
  },
  checkboxChange(e) {
    const items = this.data.items;
    const values = e.detail.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false;
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true;
          break;
        }
      }
    }

    // 这里 this.setData({items}) 没有反应
    console.log(this.data.items);
    this.setData({
      curValue: e.detail.value.join(',')
    });
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
  handleRadio1Checked() {
    this.setData({
      radio1Checked: !this.data.radio1Checked
    });
  },
  handleRadio2Checked() {
    this.setData({
      radio2Checked: !this.data.radio2Checked
    });
  },
  handelR1() {
    this.setData({
      r1: !this.data.r1
    });
  },
  handelR2() {
    this.setData({
      r2: !this.data.r2
    });
  },
  handelR3() {
    this.setData({
      r3: !this.data.r3
    });
  }
}, __templateJs));