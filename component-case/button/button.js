const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
const types = ['default', 'primary', 'warn'];
const pageObject = {
  data: {
    size: 'default',
    type: 'default',
    plain: false,
    disabled: false,
    loading: false,
    formType: '',
    hoverClass: 'button-hover',
    hoverStopPropagation: false,
    hoverStartTime: 20,
    hoverStayTime: 70
  },
  onShareAppMessage() {
    return {
      title: 'button',
      path: 'page/component/pages/button/button'
    };
  },
  onLoad() {
    console.log('onLoad 2');
  },
  onShow() {
    console.log('onShow 2');
  },
  onReady() {
    console.log('onReady 2');
  },
  onHide() {
    console.log('onHide 2');
  },
  onUnload() {
    console.log('onUnload 2');
  },
  onTabItemTap(item) {
    console.log('====component:', item);
  },
  setDisabled() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  setPlain() {
    this.setData({
      plain: !this.data.plain
    });
  },
  setLoading() {
    this.setData({
      loading: !this.data.loading
    });
  },
  handleContact(e) {
    console.log(e.detail);
  },
  handleGetPhoneNumber(e) {
    console.log('handleGetPhoneNumber: ', e.detail);
  },
  handleGetUserInfo(e) {
    console.log('handleGetUserInfo', e.detail);
  },
  handleOpenSetting(e) {
    console.log(e.detail.authSetting);
  },
  changeSize({
    detail
  }) {
    this.setData({
      size: detail.value
    });
  },
  changeType({
    detail
  }) {
    this.setData({
      type: detail.value
    });
  },
  changePlain() {
    this.setData({
      plain: !this.data.plain
    });
  },
  changeDisabled() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  changeLoading() {
    this.setData({
      loading: !this.data.loading
    });
  },
  changeHoverStopPropagation() {
    this.setData({
      hoverStopPropagation: !this.data.hoverStopPropagation
    });
  },
  changeHoverStartTime({
    detail
  }) {
    this.setData({
      hoverStartTime: detail.value
    });
  },
  changeHoverStayTime({
    detail
  }) {
    this.setData({
      hoverStayTime: detail.value
    });
  }
};
for (let i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function () {
      const key = `${type}Size`;
      const changedData = {};
      changedData[key] = this.data[key] === 'default' ? 'mini' : 'default';
      this.setData(changedData);
    };
  })(types[i]);
}
Page(__mergePageOptions(pageObject, __templateJs));