Page({
  onShareAppMessage() {
    return {
      title: 'websocket',
      path: 'packageAPI/pages/websocket/websocket',
    };
  },

  data: {},

  onConnect() {
    console.log(1);
    this.handle = xhs?.connectSocket({
      url: 'ws://10.23.154.184:3000',
      success: res => {
        console.log('connectSocket success:', res);
      },
      fail: res => {
        console.log('connectSocket success:', res);
      },
    });
    this.handle.onOpen(args => {
      console.log('onOpen', args);
      this.handle.send({
        data: '2',
        success: res1 => {
          console.log('send Success0:', res1);
        },
        fail: res1 => {
          console.log('send fail0:', res1);
        },
      });
    });
    this.handle.onMessage(msg => {
      console.log('onMessage:', msg);
      this.handle.send({
        data: '1',
        success: res => {
          console.log('send Success:', res);
        },
        fail: res => {
          console.log('send fail:', res);
        },
        complete: () => {
          setTimeout(() => {
            this.handle.close();
          });
        },
      });
    });
    this.handle.onClose(args => {
      console.log('onClose:', args);
    });
    this.handle.onError(args => {
      console.log('onError:', args);
    });
  },
});
