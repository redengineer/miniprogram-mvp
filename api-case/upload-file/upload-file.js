Page({
  onShareAppMessage() {
    return {
      title: '上传文件',
      path: 'packageAPI/pages/upload-file/upload-file',
    };
  },
  count: 0,
  data: {
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false,
    },
  },

  resetApiData() {
    this.setData({
      apiData: {
        success: false,
        fail: false,
        complete: false,
        content: '',
      },
    });
  },

  updateApiData(type, content) {
    const apiData = { ...this.data.apiData };
    apiData[type] = true;
    apiData.content = content;
    this.setData({ apiData });
  },

  chooseImage() {
    xhs.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: res => {
        this.count += 1;
        const imageSrc = res.tempFilePaths[0];
        // 上传
        this.taskHandle = xhs.uploadFile({
          url: 'https://smartprogram.baidu.com/mappconsole/api/checkFile', // 上传至云端的路径
          filePath: imageSrc, // 小程序临时文件路径
          name: `file${this.count}`,
          success: res1 => {
            console.log(res1);
          },
          fail: res1 => {
            console.log(res1);
          }
        });
        // header 事件
        this.taskHandle.onHeadersReceived(res1 => {
          this.updateApiData('success', res1);
        });
        // progress事件
        this.taskHandle.onProgressUpdate(res1 => {
          this.updateApiData('success', res1);
        });
      },
    });
  },

  abortHandle() {
    this.taskHandle?.abort();
  },

  offHeadersReceived() {
    this.taskHandle?.offHeadersReceived();
  },

  offProgressUpdateUploadTask() {
    this.taskHandle?.offProgressUpdate();
  },
});
