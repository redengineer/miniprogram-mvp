Page({
  onShareAppMessage() {
    return {
      title: 'arrayBuffer2base64/base642ArrayBuffer',
      path: 'api-case/base64arraybuffer/base64arraybuffer',
    };
  },

  data: {
    value: '',
    content: [],
  },

  handleInput(e) {
    this.setData({ value: e.detail.value });
  },

  handleArrayBufferToBase64() {
    const base64 = xhs.arrayBufferToBase64(this.data.content);
    console.log(base64);
    this.setData({ content: base64 });
  },

  handleBase64ToArrayBuffer() {
    const arrayBuffer = xhs.base64ToArrayBuffer(this.data.value);
    this.setData({ content: arrayBuffer });
    console.log(arrayBuffer);
  },
});
