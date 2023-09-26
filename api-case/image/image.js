const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
const sourceType = [['camera'], ['album'], ['camera', 'album']];
const sizeType = [['compressed'], ['original'], ['compressed', 'original']];
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '图片',
      path: 'packageAPI/pages/image/image'
    };
  },
  data: {
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],
    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],
    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    saveImageToPhotosAlbumLink: '/image/green_tri.png',
    imageInfo: ''
  },
  sourceTypeChange(e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    });
  },
  sizeTypeChange(e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    });
  },
  countChange(e) {
    this.setData({
      countIndex: e.detail.value
    });
  },
  chooseImage() {
    const that = this;
    xhs.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success: res => {
        that.setData({
          imageList: [...this.data.imageList, ...res.tempFilePaths].slice(-9)
        });
        console.log(res);
      },
      fail: res => {}
    });
  },
  previewImage(e) {
    const current = e.target.dataset.src;
    xhs.previewImage({
      current,
      urls: this.data.imageList,
      success: res => {},
      fail: res => {}
    });
  },
  previewImageStatic() {
    this.resetApiData();
    xhs.previewImage({
      current: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/yinyue@2x-c18adacacb.png',
      urls: ['https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/yinyue@2x-c18adacacb.png', 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baike@2x-1fe3db7fa6.png', 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/zhidao@2x-e9b427ecc4.png'],
      success: res => {},
      fail: res => {}
    });
  },
  handleSaveImageToPhotosAlbumLink(e) {
    this.setData({
      saveImageToPhotosAlbumLink: e.detail.value
    });
  },
  saveImageToPhotosAlbum() {
    xhs.saveImageToPhotosAlbum({
      filePath: this.data.saveImageToPhotosAlbumLink,
      success: res => {
        console.log(res);
      },
      fail: res => {
        console.log(res);
      }
    });
  },
  getImageInfo() {
    xhs.getImageInfo({
      src: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/yinyue@2x-c18adacacb.png',
      success: res => {
        this.setData({
          imageInfo: JSON.stringify(res)
        });
      },
      fail: res => {}
    });
  }
}, __templateJs));