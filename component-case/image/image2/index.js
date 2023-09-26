Page({
  onShareAppMessage() {
    return {
      title: 'image',
      path: 'page/component/pages/image/image',
    };
  },
  data: {
    imageUrl: 'https://ci.xiaohongshu.com/83074709-0d05-4d1c-9d38-24a8e910d914',
    webpImageURL:
      'https://picasso-static.xiaohongshu.com/fe-platform/a30616b87ce2fcb1d9fd76a9e1b1e18d3b64aa53.webp',
  },
});
