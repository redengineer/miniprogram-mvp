/**
 * @file demo page for component
 * @author sunbai
 */

/* global Page, xhs */

const componentItems = require('../../config');

Page({

  data: {
    items: componentItems.component,
    statusBarHeight: xhs.getSystemInfoSync().statusBarHeight,
    scrollTop: 0, // 滑动条离顶部的距离
    fixTop: 0,
    fixTopBar: false
  },
  onLoad(e) {
    // lottie页面需要判断版本
    const t = this;
    xhs.getSystemInfo({
      success: res => {
        let version = t.compareVersion('11.2', res.version);
        if (res.platform === 'ios' && version) {
          t.data.items[1].list[3].id = 'update';
        }

      }
    });
    xhs.createSelectorQuery().select('.group-logo').boundingClientRect(function (rect) {
      t.data.fixTop = rect.top;
    }).exec();
    this.setData({ isSetTabBarPage: !!e.data });
  },
  compareVersion(v1, v2) {
    v1 = v1.split('.');
    v2 = v2.split('.');
    let len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
      v1.push('0');
    }
    while (v2.length < len) {
      v2.push('0');
    }
    for (let i = 0; i < len; i++) {
      let num1 = parseInt(v1[i], 10);
      let num2 = parseInt(v2[i], 10);
      if (num1 > num2) {
        return 1;
      }
      else if (num1 < num2) {
        return 0;
      }

    }
  },
  oneItemClick: e => {
    let viewName = e.currentTarget.dataset.id;
    xhs.navigateTo({
      url: '/component-case/' + viewName + '/' + viewName
    });
  },
  toggleClick(e) {
    console.log('e', e, e.currentTarget.dataset.id);
    // 无子项直接跳转
    let apiName = e.currentTarget.dataset.id;
    // if (apiName) {
    //     xhs.navigateTo({
    //         url: '/component-case/' + apiName + '/' + apiName
    //     });
    //     return;
    // }

    // 子项展开与收起
    const index = e.currentTarget.dataset.index;
    const items = this.data.items;
    this.setData(`items[${index}].open`, !items[index].open);
  },
  openSearch() {
    xhs.navigateTo({
      url: '/entry/search/search'
    });
  }
});
