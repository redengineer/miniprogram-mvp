
Page({
  data: {
    appear: false,
    appear2: false
  },
  onLoad() {
    this.intersectionObserver = xhs.createIntersectionObserver(this);
    // 监测 scroll-view 可视区域和小球元素节点的相交情况
    console.log('swan.createIntersectionObserve的可选值', this.intersectionObserver._options);
    this.intersectionObserver
      .relativeTo('.scroll-view1')
      .observe('.ball', res => {
        console.log('observe', res);
        // boundingClientRect: 目标边界，这里指小球的位置情况，这个位置是相对于整个页面的，不是相对于参照元素的 scroll-view 的
        // dataset: 观察对象携带的数据。
        // id: 观察对象的 id，它与上面的 dataset 多使用于一次观察多个对象的场景，用于区分不同的对象。
        // intersectionRatio: 相交比例，为 0 时说明两者不相交。
        // intersectionRect: 相交区域，height 为 0 时说明此时没有相交。
        // relativeRect: 参照区域的边界，作为参考物，它的值一般是不会变的。可以对比它于开始相交时一直没变，因为它就是一个 scroll-view 的组件在页面上呈现出的位置信息。
        // time: 监测到两者相交时的时间戳
        this.setData('appear', res.intersectionRatio > 0);
      });

    this.intersectionObserver2 = xhs.createIntersectionObserver(this, {
      selectAll: true
    });
    this.intersectionObserver2
      .relativeTo('.scroll-view2')
      .observe('.ball1, .ball2', res => {
        console.log('observe2', res);
        this.setData('appear2', res.intersectionRatio > 0);
      });
  },
  onUnload() {
    this.intersectionObserver && this.intersectionObserver.disconnect();
    this.intersectionObserver2 && this.intersectionObserver2.disconnect();
      
  }
});




