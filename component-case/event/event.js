Page({
  data: {
    // 手势事件测试
    tapCount: 0,
    longTapCount: 0,
    longPressCount: 0,
    touchStartCount: 0,
    touchMoveCount: 0,
    touchEndCount: 0,
    touchCancelCount: 0,
    // 动态事件测试
    tapVariable: {
      a: 'handleTapA',
    },
    // 冒泡事件测试
    eventList1: [],
    eventList2: [],
    eventList3: [],
    // 动画事件测试
    animationClass: 'animationbox',
  },
  handleTapCount() {
    this.setData({
      tapCount: this.data.tapCount + 1
    });
  },
  handleLongTapCount() {
    this.setData({
      longTapCount: this.data.longTapCount + 1
    });
  },
  handleLongPressCount() {
    this.setData({
      longPressCount: this.data.longPressCount + 1
    });
  },
  handleTouchStartCount() {
    this.setData({
      touchStartCount: this.data.touchStartCount + 1
    });
  },
  handleTouchMoveCount() {
    this.setData({
      touchMoveCount: this.data.touchMoveCount + 1
    });
  },
  handleTouchEndCount() {
    this.setData({
      touchEndCount: this.data.touchEndCount + 1
    });
  },
  switchTap() {
    this.setData({
      'tapVariable.a': this.data.tapVariable.a === 'handleTapA' ? 'handleTapB' : 'handleTapA'
    });
  },
  handleTapA() {
    xhs.showToast({
      title: 'handleTapA'
    });
  },
  handleTapB() {
    xhs.showToast({
      title: 'handleTapB'
    });
  },
  handleAnimation() {
    if (this.data.animationClass === 'animationbox') {
      this.setData({
        animationClass: 'animationbox animation'
      });
    } else {
      this.setData({
        animationClass: 'animationbox'
      });
    }
  },
  handleAnimationStart(event) {
    console.log('handleAnimationStart', event);
    xhs.showToast({
      title: 'animation start'
    });
  },
  handleAnimationIteration(event) {
    console.log('handleAnimationIteration', event);
    xhs.showToast({
      title: 'animation iteration'
    });
  },
  handleAnimationEnd(event) {
    console.log('handleAnimationEnd', event);
    xhs.showToast({
      title: 'animation end'
    });
    this.handleAnimation();
  },
  handleTransitionEnd(event) {
    console.log('handleTransitionEnd', event);
    xhs.showToast({
      title: 'transition end'
    });
  },
  handleLongTap() {
    console.log('handleLongTap');
  },
  handleBoxTap(event) {
    console.log('handleBoxTap', event.target.dataset.id);
  },
  handleEvent(event) {
    console.log('handleEvent', event);
  },
  handleBoxTap1(event) {
    const eventList1 = this.data.eventList1;
    eventList1.push(event.currentTarget.dataset.id);
    this.setData({
      eventList1,
    });
  },
  clearTap1() {
    this.setData({
      eventList1: [],
    });
  },
  handleBoxTap2(event) {
    const eventList2 = this.data.eventList2;
    eventList2.push(event.currentTarget.dataset.id);
    this.setData({
      eventList2
    });
  },
  clearTap2() {
    this.setData({
      eventList2: [],
    });
  },
  handleBoxTap3(event) {
    const eventList3 = this.data.eventList3;
    eventList3.push(event.currentTarget.dataset.id);
    this.setData({
      eventList3,
    });
  },
  clearTap3() {
    this.setData({
      eventList3: [],
    });
  },
  handleAnimationAPIStart() {
    var animation = xhs.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });

    this.animation = animation;

    animation.scale(2, 2).rotate(45).step();

    this.setData({
      animationData: animation.export()
    });

    setTimeout(function () {
      animation.translate(30).step();
      this.setData({
        animationData: animation.export()
      });
    }.bind(this), 1000);
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step();
    this.setData({
      animationData: this.animation.export()
    });
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step();
    this.animation.scale(2, 2).step();
    this.setData({
      animationData: this.animation.export()
    });
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step();
    this.animation.translate(100, 100).step({ duration: 1000 });
    this.setData({
      animationData: this.animation.export()
    });
  }
});
