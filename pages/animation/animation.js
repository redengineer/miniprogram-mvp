Page({
  data: {
    isIPhoneX: false,
    animation: {},
  },
  onLoad() {
    this.animation = xhs.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 0,
      transformOrigin: '50% 50% 0',
    })
  },
  rotate() {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({
      animation: this.animation.export(),
    })
  },
  scale() {
    this.animation.scale(Math.random() * 2).step()
    this.setData({
      animation: this.animation.export(),
    })
  },
  translate() {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({
      animation: this.animation.export(),
    })
  },
  skew() {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({
      animation: this.animation.export(),
    })
  },
  rotateAndScale() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    this.setData({
      animation: this.animation.export(),
    })
  },
  rotateThenScale() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step()
    this.setData({
      animation: this.animation.export(),
    })
  },
  all() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({
      animation: this.animation.export(),
    })
  },
  allInQueue() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .step()
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({
      animation: this.animation.export(),
    })
  },
  reset() {
    this.animation.rotate(0, 0).scale(1).translate(0, 0).skew(0, 0).step({
      duration: 0,
    })
    this.setData({
      animation: this.animation.export(),
    })
  },
})
