Page({
  onShareAppMessage() {
    return {
      title: 'radio',
      path: 'page/component/pages/radio/radio',
    };
  },

  data: {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国', checked: 'true' },
      { value: 'BRA', name: '巴西' },
    ],
    items2: [
      { value: 'XHS', name: '小红薯' },
      { value: 'KLD', name: '克劳德', checked: 'true' },
      { value: 'ND', name: '牛顿' },
    ],
    checked: false,
    disabled: false,
    color: 'red',
    curValue: 'CHN',
    curValue2: 'KLD',
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    const items = this.data.items;
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value;
    }

    this.setData({
      curValue: e.detail.value,
    });

    this.setData({
      items,
    });
  },

  radioChange2(e) {
    const items2 = this.data.items2;
    for (let i = 0, len = items2.length; i < len; ++i) {
      items2[i].checked = items2[i].value === e.detail.value;
    }

    this.setData({
      curValue2: e.detail.value,
    });

    this.setData({
      items2,
    });
  },

  changeChecked() {
    this.setData({
      checked: !this.data.checked,
    });
  },

  changeDisabled() {
    this.setData({
      disabled: !this.data.disabled,
    });
  },

  changeColor({ detail }) {
    this.setData({
      color: detail.value,
    });
  },
});
