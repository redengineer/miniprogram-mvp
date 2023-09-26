const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '设置TabBarStyle',
      path: 'packageAPI/pages/set-tab-bar-style/set-tab-bar-style'
    };
  },
  data: {
    color: '#0000ff',
    selectedColor: '#ff0000',
    backgroundColor: '#00ff00',
    borderStyle: 'black'
  },
  handleColor(e) {
    this.setData({
      color: e.detail.value
    });
  },
  handleSelectColor(e) {
    this.setData({
      selectedColor: e.detail.value
    });
  },
  handleBackgroundColor(e) {
    this.setData({
      backgroundColor: e.detail.value
    });
  },
  handleBorderStyle(e) {
    this.setData({
      borderStyle: e.detail.value
    });
  },
  setTabBarStyle() {
    xhs.navigateBack({
      success: () => {
        xhs.setTabBarStyle({
          color: this.data.color,
          selectedColor: this.data.selectedColor,
          backgroundColor: this.data.backgroundColor,
          borderStyle: this.data.borderStyle,
          success: res => {
            xhs.showToast({
              title: '设置成功',
              icon: 'none'
            });
          },
          fail: res => {}
        });
      }
    });
  },
  reBack() {
    xhs.navigateBack({
      success: () => {
        xhs.setTabBarStyle({
          color: 'rgba(51, 51, 51, 0.4)',
          selectedColor: '#ff0000',
          backgroundColor: '#ffffff',
          success: res => {
            xhs.showToast({
              title: '设置成功',
              icon: 'none'
            });
          },
          fail: res => {}
        });
      }
    });
  }
}, __templateJs));