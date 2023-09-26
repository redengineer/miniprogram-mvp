const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '设置TabBarItem',
      path: 'packageAPI/pages/set-tab-bar-item/set-tab-bar-item'
    };
  },
  data: {
    index: 0,
    text: 'newText',
    iconPath: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baobaozhidao@2x-af409f9dbe.png',
    selectedIconPath: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/yinyue@2x-c18adacacb.png'
  },
  handleIndex(e) {
    this.setData({
      index: e.detail.value
    });
  },
  handleText(e) {
    this.setData({
      text: e.detail.value
    });
  },
  handleIconPath(e) {
    this.setData({
      iconPath: e.detail.value
    });
  },
  handleSelectIconPath(e) {
    this.setData({
      selectedIconPath: e.detail.value
    });
  },
  setTabBarItem() {
    xhs.navigateBack({
      success: () => {
        xhs.setTabBarItem({
          index: this.data.index,
          text: this.data.text,
          iconPath: this.data.iconPath,
          selectedIconPath: this.data.selectedIconPath,
          success: res => {
            xhs.showToast({
              title: '设置成功',
              icon: 'node'
            });
          },
          fail: res => {}
        });
      }
    });
  },
  showTabBar() {
    xhs.navigateBack({
      success: () => {
        xhs.showTabBar({
          animation: true,
          success: res => {},
          fail: res => {}
        });
      }
    });
  },
  hideTabBar() {
    xhs.navigateBack({
      success: () => {
        xhs.hideTabBar({
          success: res => {},
          fail: res => {}
        });
      }
    });
  },
  hideTabBarAnimate() {
    xhs.navigateBack({
      success: () => {
        xhs.hideTabBar({
          animation: true,
          success: res => {},
          fail: res => {}
        });
      }
    });
  }
}, __templateJs));