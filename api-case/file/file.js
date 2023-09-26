Page({
  onShareAppMessage() {
    return {
      title: '文件',
      path: 'packageAPI/pages/file/file',
    };
  },

  onLoad() {
    this.setData({
      savedFilePath: xhs?.getStorageSync('savedFilePath'),
    });
  },
  data: {
    tempFilePath: '',
    savedFilePath: '',
    dialog: {
      hidden: true,
    },
    filePath: '',
    fileType: '',
    fileTypes: [
      {
        key: 'doc',
        value: 'doc格式'
      },
      {
        key: 'docx',
        value: 'docx格式'
      },
      {
        key: 'xls',
        value: 'xls格式'
      },
      {
        key: 'xlsx',
        value: 'xlsx格式'
      },
      {
        key: 'ppt',
        value: 'ppt格式'
      },
      {
        key: 'pptx',
        value: 'pptx格式'
      },
      {
        key: 'pdf',
        value: 'pdf格式'
      }
    ]
  },
  chooseImage() {
    const that = this;
    xhs?.chooseImage({
      count: 1,
      success(res) {
        that.setData({
          tempFilePath: res.tempFilePaths[0],
        });
      },
    });
  },
  saveFile() {
    if (this.data.tempFilePath.length > 0) {
      const that = this;
      xhs?.saveFile({
        tempFilePath: this.data.tempFilePath,
        success(res) {
          that.setData({
            savedFilePath: res.savedFilePath,
          });
          xhs?.setStorageSync('savedFilePath', res.savedFilePath);
          that.setData({
            dialog: {
              title: '保存成功',
              content: '下次进入应用时，此文件仍可用',
              hidden: false,
            },
          });
        },
        fail() {
          that.setData({
            dialog: {
              title: '保存失败',
              content: '应该是有 bug 吧',
              hidden: false,
            },
          });
        },
      });
    }
  },
  clear() {
    xhs?.setStorageSync('savedFilePath', '');
    this.setData({
      tempFilePath: '',
      savedFilePath: '',
    });
  },
  confirm() {
    this.setData({
      'dialog.hidden': true,
    });
  },

  chooseFile() {
    
  },

  openFile() {
    console.log(this.data.filePath);
    console.log(this.data.fileType);
    xhs.openDocument({
      filePath: this.data.filePath,
      fileType: this.data.fileType || undefined,
      success(res) {
        console.log(res);
      },
      fail(res) {
        console.log(res);
      }
    });
  },

  handleFilePath(e) {
    this.setData({ filePath: e.detail.value });
  },

  handleFileType(e) {
    this.setData({ fileType: e.detail.value });
  },
});
