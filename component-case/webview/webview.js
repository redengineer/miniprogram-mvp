
const env = global.env;

const getEnv = (env) => {
  if (env === 'sit'){
    return '.sit';
  } 

  if (env === 'beta'){
    return '.beta';
  }

  return '';

};

// const url = `https://www${getEnv(env)}.xiaohongshu.com/miniapp/mid-page?fullscreen=true&disableDragBack=yes&disableBackForwardNavigationGestures=true&source=12345`
const url = `https://e${getEnv(env)}.xiaohongshu.com/home`;

Page({
  onShareAppMessage() {
    return {
      title: 'webview',
      path: 'page/component/pages/webview/webview',
    };
  },
  data: {
    url: url,
  },
  onLoad() {
    console.log('lemon1');
  },
  handleLoad() {
    console.log('load');
  },
  handleError(e) {
    console.log('error error', e);
  },
  handleMessage(e) {
    console.log('lemon', JSON.stringify(e));
  },
});
