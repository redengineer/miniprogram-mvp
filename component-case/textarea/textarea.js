Page({
  onShareAppMessage() {
    return {
      title: 'textarea',
      path: 'page/component/pages/textarea/textarea',
    };
  },

  data: {
    focus: false,
    value: '',
    placeholder: '',
    placeholderStyle: 'color:red;',
    placeholderClass: 'input-placeholder',
    disabled: false,
    maxlength: 140,
    autoFocus: false,
    autoHeight: true,
    cursor: -1,
    selectionStart: -1,
    selectionEnd: -1,
    focusTime: 0,
    blurTime: 0,
    inputValue: '',
  },

  changeValue({ detail }) {
    this.setData({
      value: detail.value,
    });
  },

  changePlaceholder({ detail }) {
    this.setData({
      placeholder: detail.value,
    });
  },

  changePlaceholderStyle({ detail }) {
    this.setData({
      placeholderStyle: detail.value,
    });
  },

  changePlaceholderClass({ detail }) {
    this.setData({
      placeholderClass: detail.value,
    });
  },

  changeDisabled() {
    this.setData({
      disabled: !this.data.disabled,
    });
  },

  changeMaxlength({ detail }) {
    this.setData({
      maxlength: detail.value,
    });
  },

  changeFocus() {
    this.setData({
      focus: !this.data.focus,
    });
  },

  changeAutoHeight() {
    this.setData({
      autoHeight: !this.data.autoHeight,
    });
  },

  changeCursor({ detail }) {
    this.setData({
      cursor: detail.value,
    });
  },

  changeSelectionStart({ detail }) {
    this.setData({
      selectionStart: detail.value,
    });
  },

  changeSelectionEnd({ detail }) {
    this.setData({
      selectionEnd: detail.value,
    });
  },

  bindTextAreaFocus({ timeStamp }) {
    this.setData({
      focusTime: timeStamp,
    });
  },

  bindTextAreaBlur({ timeStamp }) {
    this.setData({
      blurTime: timeStamp,
    });
  },

  bindTextAreaInput({ detail }) {
    this.setData({
      inputValue: detail.value,
    });
  },

  onChange(e) {
    console.log('textarea onChange', e);
  },
  bindconfirm(e) {
    console.log('textarea bindconfirm', e);
  },
});
