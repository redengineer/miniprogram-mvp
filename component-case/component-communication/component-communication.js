Page({
  data: {},

  onClearClick() {
    const com1 = this.selectComponent('#com1');
    console.log('com1', com1.onClear);
    com1.onClear();
  },
});
