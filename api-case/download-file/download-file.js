const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  data: {
    remoteFilePath: 'https://fe-video-qc.xhscdn.com/fe-platform/541cb4b0e802f5bdd91845e85082132453f8d4f5.pdf',
    filePath: '',
    fileType: ''
  },
  onDownload() {
    this.task = xhs?.downloadFile({
      url: this.data.remoteFilePath,
      // 文件 ID
      success: res => {
        console.log('【downloadFile success】:', res);
        this.setData({
          filePath: res.tempFilePath || res.filePath
        });
      },
      fail: res => {
        console.log('【downloadFile fail】:', res);
      }
    });
    if (this.task) {
      this.task.onHeadersReceived(res => {
        console.log('【onHeadersReceived】:', res);
      });
      this.task.onProgressUpdate(res => {
        console.log('【onProgressUpdate】:', res);
      });
    }
  },
  onAbort() {
    this.task?.abort();
  },
  offHeadersReceived() {
    this.task?.offHeadersReceived?.(() => {
      console.log('【offHeadersReceived】');
    });
  },
  offProgressUpdate() {
    this.task?.offProgressUpdate?.(() => {
      console.log('【offProgressUpdate】');
    });
  },
  removeSavedFile() {
    xhs.removeSavedFile({
      filePath: this.data.filePath,
      success: res => {
        console.log('【removeSavedFile success】', res);
      },
      fail: res => {
        console.log('【removeSavedFile fail】', res);
      }
    });
  },
  openDocument() {
    xhs.openDocument({
      filePath: this.data.filePath,
      fileType: this.data.fileType || undefined
    });
  },
  handleRemoteFilePath(e) {
    this.setData({
      remoteFilePath: e.detail.value
    });
  },
  handleFilePath(e) {
    this.setData({
      filePath: e.detail.value
    });
  },
  handleFileType(e) {
    this.setData({
      fileType: e.detail.value
    });
  }
}, __templateJs));