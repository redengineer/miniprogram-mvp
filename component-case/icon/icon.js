const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: 'icon',
      path: 'page/component/pages/icon/icon'
    };
  },
  data: {
    color: 'red',
    size: 30,
    type: 'success',
    iconList: [{
      type: 'success',
      title: '成功',
      text: 'success',
      description: '用于表示操作顺利完成<'
    }, {
      type: 'info',
      text: 'info'
    }, {
      type: 'warn'
    }, {
      type: 'waiting'
    }, {
      type: 'success_no_circle'
    }, {
      type: 'circle'
    }, {
      type: 'download'
    }, {
      type: 'info_circle'
    }, {
      type: 'cancel'
    }, {
      type: 'search'
    }],
    iconSize: ['40', '34', '30', '24', '20', '18', '16']
  },
  changeType({
    detail
  }) {
    this.setData({
      type: detail.value
    });
  },
  changeColor({
    detail
  }) {
    this.setData({
      color: detail.value
    });
  },
  changeSize({
    detail
  }) {
    this.setData({
      size: detail.value
    });
  }
}, __templateJs));