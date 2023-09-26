const contents = {
  html: `
  <p>支持插入图片</p>
  <br>
  <p>
      <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/editor-image-demo.png" data-custom="id=abcd&amp;role=god" alt="image-alt" class="imageCls" width="100%">
  </p>
  <hr>
  <p>支持以下字符样式</p>
  <p>
      <b>bold粗体</b>
      <em>italic斜体</em>
      <u>underline下划线</u>
  </p>
  <p>
      <sub>sub下标</sub>
      <sup>super上标</sup>
  </p>
  <hr>
  <p>支持以下列表样式</p>
  <ol>
      <li>有序列表</li>
      <li>有序列表</li>
  </ol>
  <ul>
      <li>无序列表</li>
  </ul>
  <ul>
      <li>无序列表</li>
  </ul>
  <ul data-checked="true">
      <li>选框列表</li>
  </ul>
  <ul data-checked="false">
      <li>选框列表</li>
  </ul>
  <hr>
  <p>支持以下字符大小</p>
  <h1>H1 一级标题</h1>
  <h2>H2 二级标题</h2>
  <h3>H3 三级标题</h3>
  <h4>H4 四级标题</h4>
  <h5>H5 五级标题</h5>
  <h6>H6 六级标题</h6>
  <hr>
  <p>支持以下对齐方式</p>
  <p style="text-align:center">center中间对齐</p>
  <p style="text-align:right">right 右对齐</p>
  <p style="text-align:justify">justify 自动对齐</p>
  <hr>
  <span style="color:#00bc89;background-color:#333">color 支持设置字体及背景颜色</span>`,
};
Page({
  onShareAppMessage() {
    return {
      title: 'editor',
      path: 'page/component/pages/editor/editor',
    };
  },
  data: {
    formats: {},
    readOnly: false,
    placeholder: '开始输入...',
    editorHeight: 300,
    keyboardHeight: 0,
    isIOS: false,
    safeHeight: 0,
    toolBarHeight: 50,
  },
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly,
    });
  },
  onLoad() {
    const { platform, safeArea, model, screenHeight } = xhs?.getSystemInfoSync();
    let safeHeight;
    if (safeArea) {
      safeHeight = screenHeight - safeArea.bottom;
    } else {
      safeHeight = 32;
    }
    this._safeHeight = safeHeight;
    const isIOS = platform === 'ios';
    this.setData({ isIOS, safeHeight, toolBarHeight: isIOS ? safeHeight + 50 : 50 });
    const that = this;
    this.updatePosition(0);
    let keyboardHeight = 0;
    xhs?.onKeyboardHeightChange?.(res => {
      if (res.height === keyboardHeight) {
        return;
      }
      const duration = res.height > 0 ? res.duration * 1000 : 0;
      keyboardHeight = res.height;
      setTimeout(() => {
        xhs?.pageScrollTo({
          scrollTop: 0,
          success() {
            that.updatePosition(keyboardHeight);
            that.editorCtx.scrollIntoView();
          },
        });
      }, duration);
    });
  },
  updatePosition(keyboardHeight) {
    const toolbarHeight = 50;
    const { windowHeight, platform } = xhs?.getSystemInfoSync();
    const editorHeight =
      keyboardHeight > 0 ? windowHeight - keyboardHeight - toolbarHeight : windowHeight;
    if (keyboardHeight === 0) {
      this.setData({
        editorHeight,
        keyboardHeight,
        toolBarHeight: this.data.isIOS ? 50 + this._safeHeight : 50,
        safeHeight: this._safeHeight,
      });
    } else {
      this.setData({
        editorHeight,
        keyboardHeight,
        toolBarHeight: 50,
        safeHeight: 0,
      });
    }
  },
  calNavigationBarAndStatusBar() {
    const systemInfo = xhs?.getSystemInfoSync();
    const { statusBarHeight, platform } = systemInfo;
    const isIOS = platform === 'ios';
    const navigationBarHeight = isIOS ? 44 : 48;
    return statusBarHeight + navigationBarHeight;
  },
  onEditorReady() {
    const that = this;
    that.editorCtx = xhs?.createEditorContext?.('editor');
    this.clear();
    this.setContents();
    this.removeFormat();
    this.insertDivider();

    setTimeout(() => {
      this.editorCtx.getContents({
        success: res => {
          console.log('getContents success', res);
        },
      });
    }, 1000);
  },
  blur() {
    this.editorCtx.blur();
  },
  format(e) {
    const { name, value } = e.target.dataset;
    if (!name) return;
    console.log('format', name, value);
    this.editorCtx.format(name, value);
  },
  onStatusChange(e) {
    const formats = e.detail;
    console.log('onStatusChange', e);
    this.setData({ formats });
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success() {
        console.log('insert divider success');
      },
    });
  },
  clear() {
    this.editorCtx.clear({
      success(res) {
        console.log('clear success', res);
      },
    });
  },
  removeFormat() {
    this.editorCtx.removeFormat({
      success: res => {
        console.log('removeFormat success', res);
      },
    });
  },
  setContents() {
    this.editorCtx.setContents({
      ...contents,
      success: res => {
        console.log('setContents success', res);
      },
    });
  },
  insertDate() {
    const date = new Date();
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    this.editorCtx.insertText({
      text: formatDate,
    });
  },
  insertImage() {
    const that = this;
    xhs?.chooseImage({
      count: 1,
      success(res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god',
          },
          width: '80%',
          success() {
            console.log('insert image success');
          },
        });
      },
    });
  },

  bindfocus(e) {
    console.log('bindfocus', e);
  },
  bindblur(e) {
    console.log('bindblur', e);
  },
});
