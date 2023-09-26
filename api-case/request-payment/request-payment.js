const APPID = require('../../project.config.json').appid;
const SIT_SECRET = 'your sit secret';
const BETA_SECRET = 'your beta secret';
const PROD_SECRET = 'your prod secret';

const evnMap = {
  sit: {
    SECRET: SIT_SECRET
  },
  beta: {
    SECRET: BETA_SECRET
  },
  prod: {
    SECRET: PROD_SECRET
  }
};

// const env = 'sit'
// const env = 'beta'
const env = 'prod';
const APP_ID = APPID;
const SECRET = evnMap[env].SECRET;



const map = {
  sit: {
    API_ACCESS_TOKEN: 'http://miniapp.sit.xiaohongshu.com/api/rmp/token',
    API_SESSION: 'http://miniapp.sit.xiaohongshu.com/api/rmp/session',

    API_NEW_ORDER: 'http://logan.devops.xiaohongshu.com/proxy/xhs-demo/api/sns/matrix/rmp/demo/order',
    API_STATUS: 'http://logan.devops.xiaohongshu.com/proxy/xhs-demo/api/sns/matrix/rmp/demo/order/status',

    STATIC_WX_URL: 'http://www.sit.xiaohongshu.com/miniapp/mid-page?fullscreen=true&disableDragBack=yes&disableBackForwardNavigationGestures=true&source=12345'
  },
  beta: {
    API_ACCESS_TOKEN: 'https://miniapp.beta.xiaohongshu.com/api/rmp/token',
    API_SESSION: 'https://miniapp.beta.xiaohongshu.com/api/rmp/session',

    API_NEW_ORDER: 'https://edith.beta.xiaohongshu.com/api/sns/matrix/rmp/demo/order',
    API_STATUS: 'https://edith.beta.xiaohongshu.com/api/sns/matrix/rmp/demo/order/status',

    STATIC_WX_URL: 'https://www.beta.xiaohongshu.com/miniapp/mid-page?fullscreen=true&disableDragBack=yes&disableBackForwardNavigationGestures=true&source=12345'
  },
  prod: {
    API_ACCESS_TOKEN: 'https://miniapp.xiaohongshu.com/api/rmp/token',
    API_SESSION: 'https://miniapp.xiaohongshu.com/api/rmp/session',

    API_NEW_ORDER: 'https://edith.xiaohongshu.com/api/sns/matrix/rmp/demo/order',
    API_STATUS: 'https://edith.xiaohongshu.com/api/sns/matrix/rmp/demo/order/status',

    STATIC_WX_URL: 'https://www.xiaohongshu.com/miniapp/mid-page?fullscreen=true&disableDragBack=yes&disableBackForwardNavigationGestures=true&source=12345'
  },
};

const API_ACCESS_TOKEN = map[env].API_ACCESS_TOKEN;
const API_NEW_ORDER = map[env].API_NEW_ORDER;
const API_STATUS = map[env].API_STATUS;
const API_SESSION = map[env].API_SESSION;

const STATIC_WX_URL =  map[env].STATIC_WX_URL;
const STATIC_ZFB_URL = STATIC_WX_URL;

Page({
  onShareAppMessage() {
    return {
      title: '发起支付',
      path: 'api-case/request-payment/request-payment',
    };
  },

  data: {
    payToken: '',
    orderId: '',
    payMethod: 'xhs',
    ext: '',
    wxUrl: '',
    zfbUrl: '',

    access_token: '',
    open_id: '',
    is_pay: false
  },

  // 新增订单
  insertOrder(openId, access_token) {
    const PATH = '/api-case/request-payment/request-payment';
    return new Promise((resolve, reject) => {
      xhs.request({
        url: `${API_NEW_ORDER}?openId=${openId}&path=${encodeURIComponent(PATH)}`,
        method: 'post',
        success: resolve,
        fail: reject,
      });
    });
  },

  onShow() {
    if(this.data.is_pay) {
      xhs.showToast({
        title: '支付成功',
        icon: 'none'
      });
    }
  },

  login(access_token) {
    return new Promise((resolve, reject) => {
      xhs.login({
        success: (res) => {
          const code = res.code;
          const API_SESSION_URL = `${API_SESSION}?appid=${APP_ID}&access_token=${access_token}&code=${code}`;
          xhs.request({
            url: API_SESSION_URL,
            method: 'get',
            success: (res) => {
              this.setData({
                open_id: res.data.data.openid
              });
              resolve(res.data.data.openid);
            }
          });
        },
        fail: reject
      });
    });
    
  },

  // 获取调用凭证
  getAccessToken() {
    return new Promise((resolve, reject) => {
      xhs.request({
        url: API_ACCESS_TOKEN,
        method: 'post',
        data: {
          appid: APP_ID,
          secret: SECRET
        },  
        success: resolve,
        fail: reject,
      });
    });
  },

  async handlePayment(e) {
    xhs.showToast({
      title: '唤起收银台中...',
      icon: 'none'
    });
    try {
      const tokenValue = await this.getAccessToken();
      console.log(tokenValue);
      const access_token = tokenValue.data.data.access_token;
      const loginValue = await this.login(access_token);
      console.log(loginValue);
      const orderValue = await this.insertOrder(loginValue, access_token);
      console.log(orderValue);
      this.pay(orderValue.data);
    } catch(err) {
      xhs.showToast({
        title: '支付失败',
        icon: 'none'
      });
      console.log(err);
    }
    
  },

  pay(value) {
    console.log('value', value);
    const payToken = value.data.payToken;
    const orderId = value.data.orderId;
    const outOrderId = value.data.outOrderId;

    console.log('payToken', payToken);
    console.log('xhsOrderId', orderId);
    console.log('outOrderId', outOrderId);

    const wxUrl = STATIC_WX_URL + '&payUrl=wx';
    const zfbUrl = STATIC_ZFB_URL + '&payUrl=zfb';

    xhs.requestOrderPayment({
      orderInfo: {
        payToken: payToken,
        orderId: orderId,
        payMethod: 'third',
        wxUrl: wxUrl,
        zfbUrl: zfbUrl,
      },
      success: res => {
        // xhs.showToast({
        //   title: '支付成功'
        // })
        this.setData({
          is_pay: true
        });
        console.log('支付结果', res);
      },
      fail: res => {
        xhs.showToast({
          title: '支付失败',
          icon: 'none'
        });
        console.log('支付结果', res);
      },
      complete: () => {
        xhs.request({
          url: `${API_STATUS}?openId=${this.data.open_id}&status=2&orderId=${outOrderId}`,
          method: 'post',
          success(res) {
            console.log('res', res);
          },
          fail(res) {
            console.log('res', res);
          }
        });
      }
    });
  }
});
