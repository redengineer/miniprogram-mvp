/**
 * @author zhouyangejie
 * @summary 消息队列测试
*/

const TOUCH_MOVE_COUNT = 10;
let moveCount = 0;
let eventCount = 0;

Page({
  data: {
    // status success fail ready
    testList: [
      {
        eventName: 'touchStart',
        status: 'ready'
      },

      ...new Array(TOUCH_MOVE_COUNT).fill(
        {
          eventName: 'touchMove',
          status: 'ready'
        }
      ),

      {
        eventName: 'touchEnd',
        status: 'ready'
      },
    ],
    // success not-move-all-success error
    status: '',

    info: {
      'test-success': '测试成功',
      'test-not-move-all-success': '测试成功（toucheMove事件不足）',
      'test-error': '测试失败'
    },

    isMoving: false,

    messageList: [],

    scrollTop: 360,
    isTestOver: false,
  },

  setStatus(index, status) {
    const curTestEvent = this.data.testList[index];
    if (curTestEvent) {
      this.setData(`testList[${index}].status`, status);
    }

    if (status === 'fail') {
      this.setData('isTestOver', true);
      this.setData('status', 'test-error');
    }
  },


  noticeEvent() {

    if (this.data.isTestOver) {
      return;
    }

    const curEventIndex = eventCount - 1;
    const curMessageEventName = this.data.messageList[curEventIndex];
    const curTestEvent = this.data.testList[curEventIndex];
    const curTestEventName = curTestEvent.eventName;

    if (curTestEventName === 'touchStart') {
      this.setStatus(curEventIndex, curMessageEventName === 'touchStart' ? 'success': 'fail');
    } else if (curTestEventName === 'touchMove') {
      if (curMessageEventName === 'touchEnd') {
        this.setStatus(this.data.testList.length - 1, 'success');
      } else {
        this.setStatus(curEventIndex, curMessageEventName === 'touchMove' ? 'success' : 'fail');
      }
    } else if (curTestEventName === 'touchEnd') {
      if (curMessageEventName === 'touchMove') {
        this.data.testList.splice(curEventIndex, 0, {
          eventName: 'touchMove',
          status: 'success'
        });
        this.setData('testList', this.data.testList.slice());
      } else {
        this.setStatus(curEventIndex, curMessageEventName === 'touchEnd' ? 'success' : 'fail');
      }
    }
  },

  onTouchStart(e) {
    this.setData('isMoving', true);
    this.pushMessage('touchStart');
  },
  
  onTouchMove(e) {
    moveCount++;
    this.pushMessage('touchMove');
    if (!this.data.isTestOver) {
      this.autoScroll();
    }
  },

  onTouchEnd(e) {
    this.setData('isMoving', false);
    this.pushMessage('touchEnd');
    this.handleResult();
    this.setData('isTestOver', true);
  },

  handleReset() {
    eventCount = 0;
    moveCount = 0;
    this.setData({
      isTestOver: false,
      messageList: [],
      isMoving: false,
      status: '',
      scrollTop: 0,
      testList: [
        {
          eventName: 'touchStart',
          status: 'ready'
        },
  
        ...new Array(TOUCH_MOVE_COUNT).fill(
          {
            eventName: 'touchMove',
            status: 'ready'
          }
        ),
  
        {
          eventName: 'touchEnd',
          status: 'ready'
        },
      ]
    });
  },

  handleResult() {

    if (this.data.isTestOver) {
      return;
    }

    const messageList = this.data.messageList;
    if (
      messageList[0] === 'touchStart' && 
      messageList[messageList.length - 1] === 'touchEnd'
    ) {
      if (moveCount < TOUCH_MOVE_COUNT) {
        this.setData('status', 'test-not-move-all-success');
      } else {
        this.setData('status', 'test-success');
      }
    } else {
      this.setData('status', 'test-error');
    }
  },

  pushMessage(eventName) {
    console.log('dev:', eventName);
    eventCount++;
    this.setData('messageList', [...this.data.messageList, eventName]);
    this.noticeEvent();
  },

  //滚动条至最底部
  autoScroll() {
    const scrollTop = moveCount * 40;
    this.setData({scrollTop});
  }
});

