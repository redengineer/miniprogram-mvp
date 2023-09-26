const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: '同步存储',
      path: 'packageAPI/pages/storage/storage'
    };
  },
  data: {
    key: '',
    data: '',
    title: '',
    content: ''
  },
  keyChange(e) {
    this.setData({
      key: e.detail.value
    });
  },
  dataChange(e) {
    this.setData({
      data: e.detail.value
    });
  },
  getStorage() {
    const {
      key,
      data
    } = this.data;
    let storageData;
    this.setData({
      title: '读取数中...',
      content: ''
    });
    if (key.length === 0) {
      this.setData({
        key,
        data
      });
      this.setData({
        title: '读取数据失败',
        content: 'key 不能为空'
      });
    } else {
      storageData = xhs?.getStorageSync(key);
      if (typeof storageData === 'object') storageData = JSON.stringify(storageData);
      if (storageData === '') {
        this.setData({
          key,
          data: storageData
        });
        this.setData({
          title: '读取数据失败',
          content: '找不到 key 对应的数据'
        });
      } else {
        this.setData({
          key,
          data: storageData
        });
        this.setData({
          title: '读取数据成功',
          content: `key为: ${key} data 数据为: ${storageData}`
        });
      }
    }
  },
  setStorage() {
    const {
      key,
      data
    } = this.data;
    this.setData({
      title: '存储中...',
      content: ''
    });
    if (key.length === 0) {
      this.setData({
        key,
        data
      });
      this.setData({
        title: '保存数据失败',
        content: 'key 不能为空'
      });
    } else {
      xhs?.setStorageSync(key, data);
      this.setData({
        key,
        data
      });
      this.setData({
        title: '存储数据成功',
        content: `key: ${key}, data: ${data}`
      });
    }
  },
  setStorageObject() {
    const {
      key,
      data
    } = this.data;
    this.setData({
      title: '存储中...',
      content: ''
    });
    if (key.length === 0) {
      this.setData({
        key,
        data
      });
      this.setData({
        title: '保存数据失败',
        content: 'key 不能为空'
      });
    } else {
      xhs?.setStorageSync(key, {
        age: 20
      });
      this.setData({
        key,
        data: JSON.stringify({
          age: 20
        })
      });
      this.setData({
        title: '存储数据成功',
        content: `key: ${key}, data: ${data}`
      });
    }
  },
  clearStorageByKey() {
    const key = this.data.key;
    this.setData({
      key: '',
      data: ''
    });
    this.setData({
      title: `key ${key} 清除中...`,
      content: ''
    });
    const res = xhs?.removeStorageSync(key);
    console.warn('lemon: 数据清理成功', res);
    this.setData({
      key: '',
      data: ''
    });
    this.setData({
      title: `key ${key} 清除数据成功`,
      content: ''
    });
  },
  getStorageInfo() {
    this.setData({
      key: '',
      data: ''
    });
    this.setData({
      title: 'storageInfo 获取中...',
      content: ''
    });
    const result = xhs?.getStorageInfoSync();
    console.warn('lemon 获取数据：', result);
    this.setData({
      title: 'storageInfo获取成功',
      content: `数据为: ${JSON.stringify(result)}`
    });
  },
  clearStorage() {
    this.setData({
      key: '',
      data: ''
    });
    this.setData({
      title: '清除中...',
      content: ''
    });
    xhs?.clearStorageSync();
    this.setData({
      key: '',
      data: ''
    });
    this.setData({
      title: '清除数据成功',
      content: ''
    });
  }
}, __templateJs));