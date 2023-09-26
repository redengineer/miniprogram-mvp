Page({
  data: {
    x: 0,
    y: 0,
    x1: 30,
    y1: 30,
  },
  move() {
    this.setData({
      x1: 50,
      y1: 50,
    });
  },
  scale() {
    this.setData({
      scale: 3,
    });
  },
  onChange(e) {
    console.log(e.detail);
  },
  onScale(e) {
    console.log(e.detail);
  },
});
