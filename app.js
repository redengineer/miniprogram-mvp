const systemInfo = xhs.getSystemInfoSync();

App({
  globalData: {
    hasLogin: false,
    openid: null,
    systemInfo,
    platform: systemInfo.platform.toLocaleLowerCase().includes('ios') ? 'ios' : 'android'
  },

  getLaunchOptionsSync(e) {
    console.log('App:getLaunchOptionsSync', e);
  },

  getEnterOptionsSync(e) {
    console.log('App:getEnterOptionsSync', e);
  },

  onError(e) {
    console.log('App:onError=======', e);
  },

  onLaunch(opts, data) {
    console.log('App:onLaunch========', opts);

    this.updateManager = xhs.getUpdateManager();
    this.updateManager.onUpdateReady(() => {
      xhs.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启小程序？',
        confirmText: '重启',
        success: res => {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            this.updateManager.applyUpdate();
          }
        },
      });
    });

   
    if (data && data.path) {
      xhs.navigateTo({
        url: data.path,
      });
    }
  },
  onPageNotFound(opts) {
    console.log('App:onPageNotFound========', opts);
  },
  onShow(opts) {
    console.log('App:onShow=======', opts);
  },
  onHide(opts) {
    console.log('App:onHide=======', opts);
  },
  
  // lazy loading openid
  getUserOpenId(callback) {
    const self = this;
    if (self.globalData.openid) {
      callback(null, self.globalData.openid);
    } else {
      xhs.login({
        success(data) {
          console.log('login success:', data);
        },
        fail(err) {
          console.log('xhs?.login 接口调用失败，将无法正常使用开放接口等服务', err);
          callback(err);
        },
      });
    }
  },

});
