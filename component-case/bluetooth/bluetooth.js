Page({
  openBluetoothAdapter() {
    xhs.openBluetoothAdapter?.({
      complete: res => {
        console.log('【openBluetoothAdapter】：', res);
      },
    });
  },
});
