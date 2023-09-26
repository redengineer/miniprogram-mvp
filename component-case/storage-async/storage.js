Page({
  onShareAppMessage() {
    return {
      title: '异步存储',
      path: 'packageAPI/pages/storageAsync/storage',
    };
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

  data: {
    key: '',
    data: '',
    title: '',
    content: '',
    apiData: {
      content: '',
      success: false,
      fail: false,
      complete: false,
    },
  },

  keyChange(e) {
    this.setData({
      key: e.detail.value,
    });
  },

  dataChange(e) {
    this.setData({
      data: e.detail.value,
    });
  },

  getStorage() {
    this.resetApiData();
    const { key, data } = this.data;
    let storageData;

    this.setData({
      title: '读取数中...',
      content: '',
    });

    if (key.length === 0) {
      this.setData({
        key,
        data,
      });
      this.setData({
        title: '读取数据失败',
        content: 'key 不能为空',
      });
    } else {
      xhs?.getStorage({
        key,
        success: res => {
          this.updateApiData('success', res);
          if (typeof data === 'object') data = JSON.stringify(data);
          this.setData({
            key,
            data: res.storageData,
          });

          this.setData({
            title: '读取数据成功',
            content: `key为: ${key} data 数据为: ${res.storageData}`,
          });
        },
        fail: res => {
          this.setData({
            key,
            data: storageData,
          });

          this.setData({
            title: '读取数据失败',
            content: '找不到 key 对应的数据',
          });
          this.updateApiData('fail', res);
        },
        complete: res => {
          this.updateApiData('complete', res);
        },
      });
    }
  },

  setStorage() {
    this.resetApiData();
    const { key, data } = this.data;
    this.setData({
      title: '存储中...',
      content: '',
    });
    if (key.length === 0) {
      this.setData({
        key,
        data,
      });
      this.setData({
        title: '保存数据失败',
        content: 'key 不能为空',
      });
    } else {
      xhs?.setStorage({
        key,
        data,
        success: res => {
          this.setData({
            key,
            data,
          });

          this.setData({
            title: '存储数据成功',
            content: `key: ${key}, data: ${data}`,
          });
          this.updateApiData('success', res);
        },
        fail: res => {
          this.setData({
            key,
            data,
          });
          this.setData({
            title: '存储数据失败',
            content: '',
          });
          this.updateApiData('fail', res);
        },
        complete: res => {
          this.updateApiData('complete', res);
        },
      });
    }
  },
  setStorageObject() {
    this.resetApiData();
    const { key, data } = this.data;
    this.setData({
      title: '存储中...',
      content: '',
    });
    if (key.length === 0) {
      this.setData({
        key,
        data,
      });

      this.setData({
        title: '保存数据失败',
        content: 'key 不能为空',
      });
    } else {
      xhs?.setStorage({
        key,
        data,
        success: res => {
          this.updateApiData('success', res);
          this.setData({
            key,
            data: { age: 20 },
          });

          this.setData({
            title: '存储数据成功',
            content: `key: ${key}, data: ${JSON.stringify({ age: 20 })}`,
          });
        },
        fail: res => {
          this.updateApiData('fail', res);
          this.setData({
            key,
            data,
          });

          this.setData({
            title: '存储数据失败',
            content: '',
          });
        },
        complete: res => {
          this.updateApiData('complete', res);
        },
      });
    }
  },
  clearStorageByKey() {
    this.resetApiData();
    const key = this.data.key;
    this.setData({
      key: '',
      data: '',
    });
    this.setData({
      title: `key ${key} 清除中...`,
      content: '',
    });
    xhs?.removeStorage({
      key,
      success: res => {
        this.updateApiData('success', res);
        this.setData({
          key: '',
          data: '',
        });

        this.setData({
          title: `key ${key} 清除数据成功`,
          content: '',
        });
      },
      fail: res => {
        this.updateApiData('fail', res);
        this.setData({
          key: '',
          data: '',
        });

        this.setData({
          title: `key ${key} 清除数据失败`,
          content: '',
        });
      },
      complete: res => {
        this.updateApiData('complete', res);
      },
    });
  },
  getStorageInfo() {
    this.resetApiData();
    this.setData({
      key: '',
      data: '',
    });
    this.setData({
      title: 'storageInfo 获取中...',
      content: '',
    });
    xhs?.getStorageInfo({
      success: result => {
        this.updateApiData('success', result);
        this.setData({
          title: 'storageInfo获取成功',
          content: `数据为: ${JSON.stringify(result)}`,
        });
      },
      fail: res => {
        this.updateApiData('fail', res);
        this.setData({
          title: 'storageInfo获取失败',
          content: '',
        });
      },
      complete: res => {
        this.updateApiData('complete', res);
      },
    });
  },

  clearStorage() {
    this.resetApiData();
    this.setData({
      key: '',
      data: '',
    });
    this.setData({
      title: '清除中...',
      content: '',
    });
    xhs?.clearStorage({
      success: res => {
        this.updateApiData('success', res);
        this.setData({
          key: '',
          data: '',
        });

        this.setData({
          title: '清除数据成功',
          content: '',
        });
      },
      fail: res => {
        this.updateApiData('fail', res);
        this.setData({
          key: '',
          data: '',
        });

        this.setData({
          title: '清除数据失败',
          content: '',
        });
      },
      complete: res => {
        this.updateApiData('complete', res);
      },
    });
  },
});
