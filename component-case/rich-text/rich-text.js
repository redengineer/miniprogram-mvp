const __templateJs = require("./templates.js");
const __mergePageOptions = require("../../util/mergePageOptions.js");
const htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`;
const nodeSnip = `Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60rpx; color: #1AAD19;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you're gonna get.'
      }]
    }]
  }
})
`;
Page(__mergePageOptions({
  onShareAppMessage() {
    return {
      title: 'rich-text',
      path: 'page/component/pages/rich-text/rich-text'
    };
  },
  data: {
    htmlSnip,
    nodeSnip,
    renderedByHtml: false,
    renderedByNode: false,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60rpx; color: red;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you\'re gonna get.'
      }]
    }],
    rt1: `
      <h1>h1标题</h1>
      <h2>h2标题</h2>
      <h3>h3标题</h3>
      <h4>h4标题</h4>
      <h5>h5标题</h5>
      <h6>h6标题</h6>
      <hr />
      <i>斜体</i>
      <br />
      <img alt="alt" src="http://www.3xiayou.com/upload/upload/1528174589.jpg" width="100px" height="100px" />
      <br />
      <p>这是一个段落p标签</p>
      <br />
      <q>引号标签</q>
      <br />
      <span>span标签</span>
      <br />
      <strong>strong标签</strong>
      <br />
      <sub>sub标签</sub>
      <br />
      <sup>sup标签</sup>
      <br />
    `
  },
  renderHtml() {
    this.setData({
      renderedByHtml: true
    });
  },
  renderNode() {
    this.setData({
      renderedByNode: true
    });
  },
  enterCode(e) {
    console.log(e.detail.value);
    this.setData({
      htmlSnip: e.detail.value
    });
  }
}, __templateJs));