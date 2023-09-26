Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper',
    };
  },

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    indicatorColor: 'gray',
    indicatorActiveColor: 'yellow',
    vertical: false,
    autoplay: false,
    circular: true,
    current: 0,
    interval: 2000,
    duration: 500,
    src: '',
    nextMargin: '40rpx',
  },

  onReady() {
    setTimeout(() => {
      this.setData({
        src: 'https://b.bdstatic.com/searchbox/icms/searchbox/images/demo.webp',
      });

      this.setData({
        height: 180,
      });
    }, 1000);
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    });
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay,
    });
  },

  changeVertical() {
    this.setData({
      vertical: !this.data.vertical,
    });
  },

  changeCircular() {
    this.setData({
      circular: !this.data.circular,
    });
  },

  changeCurrent({ detail }) {
    this.setData({
      current: parseInt(detail.value, 10),
    });
  },

  changeIndicatorColor({ detail }) {
    this.setData({
      indicatorColor: detail.value,
    });
  },

  changeIndicatorActiveColor({ detail }) {
    this.setData({
      indicatorActiveColor: detail.value,
    });
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value,
    });
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value,
    });
  },

  onChange(e) {
    console.log('swiper bindChange', e);
  },
});
