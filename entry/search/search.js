/**
 * @file search page
 * @author zhouyangjie
 */

/* global Page, xhs */
import {
  componentDictionary,
  apiDictionary,
  extensionDictonary,
  fragmentDictonary
} from './dictionary';

let last = '';

Page({

  data: {
    value: '',
    focus: false,
    likeFocus: false,
    component: [],
    api: [],
    extensions: [],
    fragment: [],
    history: [],
    hot: [{subName: '支付', id: 'payment'},
      {subName: '拨打电话', id: 'make-phone-call'},
      {subName: '语音识别', id: 'get-voice-manager'},
      {subName: '车型识别', id: 'car-classify'},
      {subName: '动物识别', id: 'animal-classify'},
      {subName: '植物识别', id: 'plant-classify'},
      {subName: '设置页面标题', id: 'set-navigation-bar-title'}],
    hasResult: false,
    hasHistory: true,
    showEmptyResult: false,
    blur: true,
    subPackageName: '',
    tag: 'all',
    scrollInto: 'components',
    top: 0,
    apiHeight: 0,
    comHeight: 0,
  },
  onShow() {
    this.getHistoryStorage();
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        focus: true
      });
    }, 500);
  },  
  searchFocus(e) {
    this.setData({
      focus: true
    });
    if (e.detail.value !== '') {
      this.setData({
        likeFocus: true
      });
    }
  },
  searchInput(e) {
    const value = e.detail.value;
    clearTimeout(this.timeId);
    this.setData({
      value,
      likeFocus: true,
      component: [],
      api: [],
      extensions: [],
      fragment: [],
      hasResult: false,
      showEmptyResult: false
    });
    if (!value) {
      this.setData({
        likeFocus: false
      });
      this.resetResult();
      return false;
    }
    if (value.length === 1 && /[a-zA-Z]/.test(value)) {
      this.resetResult();
      return false;
    }
    this.timeId = setTimeout(() => {
      this.getSearchResult(value);
      this.searchConfirm(value);
    }, 100);
  },
  searchConfirm(e) {
    const value = this.getData('value').replace(/\s/gi, '');
    if (value) {
      this.setData({
        showEmptyResult: true,
        hasHistory: true
      });
      this.getSearchResult(value);
      this.setHistoryStorage(value);
    }

    this.setData({
      likeFocus: false
    });
    this.setData({
      focus: false
    });
  },
  searchBlur(e) {
    if (e.detail.value === '') {
      this.setData({
        likeFocus: false,
        focus: false
      });
    }
    else if (this.getData('showEmptyResult')) {
      this.setData({
        focus: false
      });
    }

    let showEmptyResult = this.getData('showEmptyResult');
    if (showEmptyResult) {
      this.setData({
        likeFocus: false
      });
    }

  },
  searchClear() {
    this.setData({
      value: '',
      likeFocus: false,
      component: [],
      api: [],
      extensions: [],
      fragment: [],
      hasResult: false,
      showEmptyResult: false
    });
  },
  historyClear() {
    xhs.showModal({
      content: '确定清空相关历史？',
      confirmText: '确定',
      cancelText: '取消',
      success: res => {
        if (res.cancel) {
        }
        else if (res.confirm) {
          this.setData({
            history: [],
            hasHistory: false
          });
          xhs.clearStorageSync('history');
        }

      }
    });
  },
  getSearchResult(value) {
    let newValue = value.toLowerCase();
    const component = componentDictionary.filter(item =>
      item.subName.indexOf(value) > -1
            || (item.searchId ? item.searchId.toLowerCase().indexOf(newValue) > -1 : '')
    );
    const api = apiDictionary.filter(item =>
      item.subName.indexOf(value) > -1
            || item.id.toLowerCase().indexOf(newValue) > -1
    );
    const extensions = extensionDictonary.filter(item =>
      item.subName.indexOf(value) > -1
            || item.id.toLowerCase().indexOf(newValue) > -1
    );
    const fragment = fragmentDictonary.filter(item =>
      item.subName.indexOf(value) > -1
            || item.id.toLowerCase().indexOf(newValue) > -1
    );
    const hasResult = component.length || api.length || extensions.length || fragment.length;
    this.setData({
      component, api, extensions, fragment, hasResult, 
      apiHeight: component.length * 50 + 68, tag: 'all', comHeight: api.length * 50 + 68
    });
  },
  compareDictionary(value) {},
  resetResult() {
    this.setData({
      component: [],
      api: [],
      extensions: [],
      fragment: [],
      hasResult: false
    });
  },
  openPage(e) {
    let {item, prepath} = e.currentTarget.dataset;
    let id = item.id;

    if (prepath === 'component-case') {
      xhs.navigateTo({
        url: `/component-case/${id}/${id}`
      });
    } else if (prepath === 'api-case') {
      xhs.navigateTo({
        url: `/api-case/${id}/${id}`
      });
    }
  },
  setHistoryStorage(value) {
    const history = this.getData('history');
    const index = history.findIndex(item => item === value);
    if (index > -1) {
      history.splice(index, 1);
    }

    history.unshift(value);
    xhs.setStorageSync('history', history);
    this.setData('history', history);
  },
  getHistoryStorage() {
    let history = xhs.getStorageSync('history') || [];
    if (history.length === 0) {
      this.setData('hasHistory', false);
    }
    else {
      this.setData('hasHistory', true);
    }
    if (!Array.isArray(history)) {
      history = [];
    }

    this.setData('history', history);
  },
  openSearch(e) {
    const word = e.currentTarget.dataset.word;
    this.setData({
      value: word
    });
    this.getSearchResult(word);
    this.searchConfirm(word);
  },

  setTag(e) {
    if (e.target.dataset.tag === 'all') {
      this.setData({
        tag: e.target.dataset.tag,
        scrollInto: 'components'
      });
      return; 
    }

    last = '';
    this.setData({
      tag: e.target.dataset.tag,
      scrollInto: e.target.dataset.tag,
    });
  },

  handleScroll(e) {
    if (last !== 'scroll') {
      last = 'scroll';
      return; 
    }

    if ((this.data.tag === 'all' || this.data.tag === 'components') && e.detail.scrollTop < this.data.apiHeight - 10) {
      return; 
    }

    if (e.detail.scrollTop >= this.data.apiHeight - 10) {
           
      this.setData({
        tag: 'apis'
      });
    } else {
      this.setData({
        tag: 'components'
      });
    }
  }
});
