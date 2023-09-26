const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length === 1 ? `0${color}` : color;
    rgb.push(color);
  }
  return `#${rgb.join('')}`;
}
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: 'video',
      path: 'page/component/pages/video/video'
    };
  },
  onReady() {
    this.videoContext = xhs?.createVideoContext('myVideo');
  },
  inputValue: '',
  data: {
    enableAutoRotation: true,
    src: '',
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
    height: 200,
    showMute: false
  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value;
  },
  bindButtonTap() {
    const that = this;
    xhs?.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        });
      }
    });
  },
  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式');
  },
  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式');
  },
  bindVideoPlay() {
    this.videoContext.play();
  },
  bindVideoPause() {
    this.videoContext.pause();
  },
  bindVideoStop() {
    this.videoContext.stop();
  },
  bindVideoSeek() {
    this.videoContext.seek(10);
  },
  bindVideoSendDanmu() {
    this.videoContext.sendDanmu({
      text: '小红书小程序',
      color: getRandomColor(),
      time: 12
    });
  },
  videoErrorCallback(e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  },
  handleSwitchChange(e) {
    this.setData({
      enableAutoRotation: e.detail.value
    });
  },
  handleVideoEnd() {
    console.log('----------lemon video end');
  },
  handleVideoTimeUpdate() {
    console.log('----------lemon video time update');
  },
  handFullscreen() {
    console.log('----------lemon video full screen');
  },
  handleWaiting() {
    console.log('----------lemon video handleWaiting');
  },
  handleError() {
    console.log('----------lemon video handleError');
  },
  handleProgress() {
    console.log('----------lemon video handleProgress');
  },
  handleLoadedMetadata() {
    console.log('----------lemon video handleLoadedMetadata');
  },
  bindVideoMute() {
    this.setData({
      showMute: !this.data.showMute
    });
  }
}, __templateJs));