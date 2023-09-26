Page({
  onShareAppMessage() {
    return {
      title: '振动',
      path: 'packageAPI/pages/vibrate/vibrate',
    };
  },

  vibrateShort() {
    xhs?.vibrateShort({
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.error(err);
      },
      complete() {
        console.log('completed');
      },
    });
  },

  vibrateLong() {
    xhs?.vibrateLong({
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.error(err);
      },
      complete() {
        console.log('completed');
      },
    });
  },
});
