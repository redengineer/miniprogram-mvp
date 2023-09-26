/* global Page, xhs */

const apiItems = require('../../config');

Page({

  data: {
    /**
         * 以下文档中有的但是没有相应展示组件的会标识todo
        */
    items: apiItems.api,
    fixTop: 0,
    statusBarHeight: xhs.getSystemInfoSync().statusBarHeight
  },

  onLoad(e) {
    let t = this;
    xhs.createSelectorQuery().select('.group-logo').boundingClientRect(function (rect) {
      t.data.fixTop = rect.top;
    }).exec();
    this.setData({isSetTabBarPage: !!e.data});
  },

  toggleClick(e) {
    // console.log('e', e, e.currentTarget.dataset.id)
    // 无子项直接跳转
    let apiName = e.currentTarget.dataset.id;
    // if (apiName) {
    //     xhs.navigateTo({
    //         url: '/component/' + apiName + '/' + apiName
    //     });
    //     return;
    // }

    // 子项展开与收起
    const index = e.currentTarget.dataset.index;
    const items = this.data.items;
    this.setData(`items[${index}].open`, !items[index].open);
  },

  oneItemClick(e) {
    let apiName = e.currentTarget.dataset.id;
    let show = e.currentTarget.dataset.show;
    if (show === 'no') {
      xhs.showToast({
        title: '该项能力暂不支持',
        icon: 'none'
      });
      return; 
    }

    if (show === 'not') {
      xhs.showToast({
        title: '未开放，敬请期待',
        icon: 'none'
      });
      return; 
    }
        
    xhs.navigateTo({
      url: '/api-case/' + apiName + '/' + apiName
    });
  },

  openSearch() {
    xhs.navigateTo({
      url: '/entry/search/search'
    });
  }
});
