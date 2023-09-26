const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '模态弹窗',
      path: 'packageAPI/pages/modal/modal'
    };
  },
  data: {
    title: '弹窗标题',
    content: '弹框内容',
    cancelText: '取消文字',
    cancelTextColor: '#ff0000',
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false
    }
  },
  handleTitleInput(e) {
    this.setData({
      title: e.detail.value
    });
  },
  handleContentInput(e) {
    this.setData({
      content: e.detail.value
    });
  },
  handleCancelTextInput(e) {
    this.setData({
      cancelText: e.detail.value
    });
  },
  handleCancelTextColorInput(e) {
    this.setData({
      cancelTextColor: e.detail.value
    });
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
  common(config) {
    this.resetApiData();
    xhs?.showModal({
      ...config,
      success: res => {
        this.updateApiData('success', res);
      },
      fail: res => {
        this.updateApiData('fail', res);
      },
      complete: res => {
        this.updateApiData('complete', res);
      }
    });
  },
  noTitlemodalTap() {
    this.common({
      content: this.data.content,
      showCancel: false
    });
  },
  modalTap() {
    this.common({
      title: this.data.title
    });
  },
  modalTap1() {
    this.common({
      title: this.data.title,
      showCancel: false
    });
  },
  modalTap2() {
    this.common({
      title: this.data.title,
      cancelText: this.data.cancelText
    });
  },
  modalTap3() {
    this.common({
      title: this.data.title,
      cancelColor: this.data.cancelTextColor
    });
  },
  modalTap4() {
    this.common({
      title: this.data.title,
      confirmText: '确认文字'
    });
  },
  modalTap5() {
    this.common({
      title: this.data.title,
      confirmColor: '#00ff00'
    });
  },
  modalTap6() {
    this.common({
      title: this.data.title,
      editable: true,
      placeholderText: 'placeholderText'
    });
  },
  modalTap7() {
    this.common({
      title: this.data.title,
      editable: true,
      placeholderText: 'this is default'
    });
  }
}, __templateJs));