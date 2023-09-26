Page({
  onShareAppMessage() {
    return {
      title: 'lifecycle',
      path: 'packageAPI/pages/lifecycle/lifecycle',
    };
  },
  data: {
    load: false,
    show: false,
    hide: false,
    unload: false,
  },
  onLoad() {
    xhs?.showToast({ title: 'pageOnLoad' });
  },
  onShow() {
    xhs?.showToast({ title: 'pageOnShow' });
  },
  onHide() {
    xhs?.showToast({ title: 'pageOnHide' });
  },
  onUnload() {
    xhs?.showToast({ title: 'pageOnUnload' });
  },
});
