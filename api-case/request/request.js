const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
const requestUrl = require('../../config').requestUrl;
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '网络请求',
      path: 'api-case/request/request'
    };
  },
  data: {},
  request(e) {
    console.log(e);
    const method = e.target.dataset.method;
    xhs.request({
      url: requestUrl,
      method: method,
      data: {
        noncestr: Date.now()
      },
      success(res) {
        xhs.showModal({
          title: `${method}请求成功`,
          content: `${JSON.stringify(res)}`
        });
      },
      fail(res) {
        xhs.showToast({
          title: `${method}请求失败：${JSON.stringify(res)}`
        });
      }
    });
  },
  makeRequest() {
    xhs.request({
      url: requestUrl,
      method: 'get',
      success(res) {
        xhs.showModal({
          title: '请求成功',
          content: `${JSON.stringify(res)}`
        });
      },
      fail(res) {
        xhs.showToast({
          title: `请求失败：${JSON.stringify(res)}`
        });
      }
    });
  },
  makeRequestOptions() {
    xhs.request({
      url: requestUrl,
      method: 'OPTIONS',
      data: {
        noncestr: Date.now()
      }
    });
  },
  makeRequestHead() {
    xhs.request({
      url: requestUrl,
      method: 'HEAD',
      data: {
        noncestr: Date.now()
      }
    });
  },
  makeRequestPut() {
    xhs.request({
      url: requestUrl,
      method: 'PUT',
      data: {
        noncestr: Date.now()
      }
    });
  },
  makeRequestDelete() {
    xhs.request({
      url: requestUrl,
      method: 'DELETE',
      data: {
        noncestr: Date.now()
      }
    });
  },
  makeRequestPostJSON() {
    xhs.request({
      url: requestUrl,
      method: 'POST',
      header: {
        'content-type': 'application-json'
      },
      data: {
        noncestr: Date.now()
      }
    });
  },
  makeRequestPostFormData() {
    xhs.request({
      url: requestUrl,
      header: {
        'content-type': 'multipart/form-data'
      },
      data: {
        name: 123,
        sex: 456
      }
    });
  },
  makeRequestTimeout() {
    xhs.request({
      url: requestUrl,
      timeout: 2000,
      data: {
        noncestr: Date.now()
      }
    });
  },
  makeRequestRequestArrayBuffer() {
    xhs.request({
      url: requestUrl,
      method: 'POST',
      data: new ArrayBuffer('test')
    });
  },
  makeRequestResponseArrayBuffer() {
    xhs.request({
      url: requestUrl,
      responseType: 'arraybuffer',
      data: {
        noncestr: Date.now()
      }
    });
  },
  makeRequestPostForm() {
    xhs.request({
      url: requestUrl,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        name: 1,
        age: 2
      }
    });
  }
}, __templateJs));