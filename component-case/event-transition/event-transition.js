Page({
  onShareAppMessage() {
    return {
      title: 'view',
      path: 'page/component/pages/event-transition/event-transition',
    };
  },

  onTransitionStart() {
    console.log('1111111 onTransitionStart');
  },
  onTransitionEnd() {
    console.log('222222 onTransitionEnd');
  },
});
