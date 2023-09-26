const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
const app = getApp();
const platform = app.globalData.platform;
const isAuthorize = value => {
  if (platform === 'ios') {
    return value;
  } else {
    return value === 1;
  }
};
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '授权设置',
      path: '/api-case/setting/setting'
    };
  },
  data: {
    config: ''
  },
  handleGetSetting(scope) {
    const showToast = text => {
      xhs.showToast({
        title: text,
        icon: 'none'
      });
    };
    xhs.getSetting({
      success(res) {
        console.log(res);
        if (!isAuthorize(res.authSetting[scope])) {
          xhs.authorize({
            scope,
            success(res) {
              xhs.showModal({
                title: '授权成功',
                content: JSON.stringify(res)
              });
              console.log(res);
            },
            fail(res) {
              showToast('授权失败');
              console.log(res);
            }
          });
          return;
        }
        showToast('已授权');
      }
    });
  },
  handleAuthorize(e) {
    const scope = e.target.dataset.scope;
    this.handleGetSetting(scope);
  },
  getSetting() {
    xhs.getSetting({
      success: res => {
        xhs.showModal({
          title: '设置信息获取成功',
          content: JSON.stringify(res.authSetting)
        });
      }
    });
  },
  openSetting() {
    xhs.openSetting({
      success: res => {
        console.log(res);
      }
    });
  },
  getPhoneNumber(e) {
    console.log(e);
    if (e.detail.encryptedData) {
      xhs.showToast({
        title: '获取成功',
        icon: 'none'
      });
    } else {
      xhs.showToast({
        title: '授权失败，请先登陆',
        icon: 'none'
      });
    }
  }
}, __templateJs));