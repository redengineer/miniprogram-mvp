module.exports = {
  component: [
    {
      icon: '../../image/biaodanzujian.png',
      name: '表单组件',
      open: false,
      list: [
        {
          subName: '按钮',
          subNameTra: 'button',
          id: 'button',
          containComponents: [
            {
              tagName: 'button',
              innerHTML: `我是一个按钮`
            }
          ]
        },
        {
          subName: '开关',
          subNameTra: 'switch',
          id: 'switch',
          containComponents: [
            {
              tagName: 'switch'
            }
          ]
        },
        {
          subName: '单项/多项选择器',
          subNameTra: 'checkbox',
          id: 'checkbox',
          containComponents: [
            'radio',
            {
              tagName: 'radio-group',
              innerHTML: `
                <radio value="1"></radio>
                <radio value="2"></radio>
                <radio value="3"></radio>
              `
            },
            'checkbox',
            {
              tagName: 'checkbox-group',
              innerHTML: `
                <checkbox value="1"></checkbox>
                <checkbox value="2"></checkbox>
                <checkbox value="3"></checkbox>
              `
            },
          ]
        },
        {
          subName: '输入框',
          subNameTra: 'input',
          id: 'input',
          containComponents: [
            {
              tagName: 'input',
              outerHTML: `
              <view class="_ui-input">
                {{slot}}
              </view>
              `,
              excludeProps: [
                'adjustPosition'
              ]
            },
            {
              tagName: 'textarea',
              outerHTML: `
              <view class="_ui-textarea">
                {{slot}}
              </view>
              `
            }
          ]
        },
        {
          subName: '滚动选择器',
          subNameTra: 'picker-view',
          id: 'picker-view',
          containComponents: [
            {
              tagName: 'picker-view',
              props: {
                indicatorStyle: 'height: 50px;',
                value: [2, 1, 1]
              },
              attrs: {
                style: "width: 100%; height: 300px;"
              },
              innerHTML: `
              <picker-view-column>
              <view xhs:for="{{years}}" style="line-height: 50px; text-align: center;color:black;">{{item}}年</view>
              </picker-view-column>
              <picker-view-column>
                <view xhs:for="{{months}}" style="line-height: 50px; text-align: center;color:black;">{{item}}月</view>
              </picker-view-column>
              <picker-view-column>
                <block  xhs:for="{{days[value[1]]}}">
                  <view style="line-height: 50px; text-align: center;color:black;">{{item}}日</view>
                </block>
              </picker-view-column>
              <picker-view-column>
                <view class="icon-container">
                  白天
                </view>
                <view class="icon-container">
                  黑夜
                </view>
              </picker-view-column>
              `
            }
          ]
        },
        {
          subName: '滑动选择器',
          subNameTra: 'slider',
          id: 'slider',
          containComponents: [
            'slider'
          ]
        },
        {
          subName: '表单',
          subNameTra: 'form',
          id: 'form'
        },
        {
          subName: '底部弹起的滚动选择器',
          subNameTra: 'picker',
          id: 'picker'
        },
        {
          subName: '富文本编辑器',
          id: 'editor',
          subNameTra: 'editor'
        }
      ]
    },

    {
      icon: '../../image/jichuneirong.png',
      name: '基础内容',
      open: false,
      list: [
        {
          subName: '图标',
          subNameTra: 'icon',
          id: 'icon',
          containComponents: [
            {
              props: {
                type: "success"
              },
              tagName: 'icon'
            }
          ]
        },
        {
          subName: '进度条',
          subNameTra: 'progress',
          id: 'progress',
          containComponents: [
            'progress'
          ]
        },
        {
          subName: '文本',
          subNameTra: 'text',
          id: 'text',
          containComponents: [
            {
              tagName: 'text',
              innerHTML: `这是  一段  测试  文字`
            }
          ]
        },
        {
          subName: '富文本',
          id: 'rich-text',
          containComponents: [
            {
              tagName: 'rich-text',
              props: {
                nodes: `
                <div class="div_class">
                  <h1>Title</h1>
                  <p class="p">
                    Life is&nbsp;<i>like</i>&nbsp;a box of
                    <b>&nbsp;chocolates</b>.
                  </p>
                </div>
                `
              }
            }
          ]
        },
        {
          subName: 'label',
          id: 'label',
          containComponents: [
            {
              tagName: 'label',
              innerHTML: `
                <switch type="checkbox" color="red"></switch>
              `
            }
          ]
        }
      ]
    },

    {
      icon: '../../image/meituzujian.png',
      name: '媒体组件',
      open: false,
      list: [
        {
          subName: '图片',
          subNameTra: 'image',
          id: 'image',
          containComponents: [
            {
              props: {
                src: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
              },
              tagName: 'image',
            }
          ]
        },
        {
          subName: '视频',
          subNameTra: 'video',
          id: 'video',
          containComponents: [
            {
              tagName: 'video',
              props: {
                src: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4'
              }
            }
          ]
        },
      ]
    },

    {
      icon: '../../image/dituzujian.png',
      name: '地图组件',
      open: false,
      list: [
        {
          subName: '地图',
          subNameTra: 'map',
          id: 'map',
          // containComponents: [
          //   'map'
          // ]
        }
      ]
    },

    {
      icon: '../../image/shiturongqi.png',
      name: '视图容器',
      open: false,
      list: [
        {
          subName: '基础视图',
          subNameTra: 'view',
          id: 'view',
          containComponents: [
            {
              tagName: 'view',
              attrs: {
                style: 'height: 100px; background-color: red;'
              }
            }
          ]
        },
        {
          subName: '可移动视图容器',
          subNameTra: 'movable-area',
          id: 'movable-area'
        },
        {
          subName: '可滚动视图区域',
          subNameTra: 'scroll-view',
          id: 'scroll-view'
        },
        {
          subName: '滑块视图容器',
          subNameTra: 'swiper',
          id: 'swiper'
        },
      ]
    },

    {
      icon: '../../image/daohangzujian.png',
      name: '导航组件',
      open: false,
      list: [
        {
          subName: '页面导航',
          subNameTra: 'navigator',
          id: 'navigator'
        },
      ]
    },

    {
      icon: '../../image/kaifangnengli.png',
      name: '开放能力',
      open: false,
      list: [
        {
          subName: '网页容器',
          subNameTra: 'webview',
          id: 'webview'
        },
        {
          subName: '模版引用',
          subNameTra: 'template',
          id: 'template'
        },
        {
          subName: '手势和动画事件',
          subNameTra: 'event',
          id: 'event'
        },
        {
          subName: 'include引用',
          subNameTra: 'include',
          id: 'include'
        },
        {
          subName: '事件消息队列',
          id: 'event-message-queue'
        }
      ]
    },

    {
      icon: '../../image/daohangzujian.png',
      name: '自定义组件',
      open: false,
      list: [
        {
          subName: '组件通信与事件',
          subNameTra: 'component-communication',
          id: 'component-communication'
        }, 
      ]
    }
  ],
  api: [
    {
      icon: '../../image/jichu.png',
      name: '基础',
      open: false,
      list: [
        {
          subName: '检测api能力',
          id: 'caniuse',
          containApis: [
            {
              apiName: 'canIUse',
              isSync: true
            }
          ]
        },
        {
          subName: '获取设备系统信息',
          id: 'get-system-info',
          containApis: [
            'getSystemInfo'
          ]
        }, 
        {
          subName: '检测小程序更新',
          id: 'mp-update',
          containApis: [
            {
              apiName: 'applyUpdate',
              prefix: {
                prefixName: `updateManager`,
                prefixCode: `const updateManager = xhs.getUpdateManager()`
              }
            }
          ]
        },
        {
          subName: '小程序启动',
          id: 'getLaunchOptionsSync',
          containApis: [
            {
              apiName: 'getLaunchOptionsSync',
              isSync: true
            },
            {
              apiName: 'getEnterOptionsSync',
              isSync: true
            }
          ]
        }
      ]
    }, 

    {
      icon: '../../image/luyou.png',
      name: '路由',
      open: false,
      list: [
        {
          subName: '页面跳转',
          id: 'navigator',
          containApis: [
            'navigateBack',
            'navigateTo',
            'reLaunch',
            'redirectTo',
            'switchTab',
            'exitMiniProgram'
          ]
        }
      ]
    }, 
    {
      icon: '../../image/jiemian.png',
      name: '界面',
      open: false,
      list: [
        {
          subName: '显示加载提示框',
          id: 'loading',
          containApis: [
            'showLoading',
            'hideLoading'
          ]
        }, 
        {
          subName: '显示消息提示框',
          id: 'toast',
          containApis: [
            'showToast',
            'hideToast'
          ]
        }, 
        {
          subName: '操作菜单',
          id: 'action-sheet',
          containApis: [
            'showActionSheet'
          ]
        }, 
        {
          subName: '显示模态弹窗',
          id: 'modal',
          containApis: [
            'showModal',
          ]
        }, 
        {
          subName: '设置tabBar状态',
          id: 'set-tab-bar-item',
          containApis: [
            'setTabBarItem'
          ]
        },
        {
          subName: '设置tabBar样式',
          id: 'set-tab-bar-style',
          containApis: [
            'setTabBarStyle'
          ]
        },
        {
          subName: '设置导航栏颜色',
          id: 'set-navigation-bar-color',
          containApis: [
            'setNavigationBarColor',
          ]
        }, 
        {
          subName: '设置导航栏标题',
          id: 'set-navigation-bar-title',
          containApis: [
            'setNavigationBarColor',
            'setNavigationBarTitle'
          ]
        }, 
        {
          subName: '下拉刷新',
          id: 'pull-down-refresh',
          containApis: [
            'startPullDownRefresh',
            'stopPullDownRefresh'
          ]
        }, 
        {
          subName: '创建动画',
          id: 'animation'
        }, 
        {
          subName: '获取菜单按钮布局信息',
          id: 'menu-button',
          containApis: [
            {
              apiName: 'getMenuButtonBoundingClientRect',
              isSync: true
            }
          ]
        }, 
      ]
    }, 

    {
      icon: '../../image/wangluo.png',
      name: '网络',
      open: false,
      list: [
        {
          subName: '发起请求',
          id: 'request',
          containApis: [
            'request'
          ]
        }, 
        {
          subName: '上传文件',
          id: 'upload-file',
          show: 'not'
        }, 
        {
          subName: '下载文件',
          id: 'download-file',
          containApis: [
            'downloadFile',
            'openDocument',
            'removeSavedFile'
          ]
        }, 
      ]
    }, 
    {
      icon: '../../image/shujuhuancun.png',
      name: '数据缓存',
      open: false,
      list: [
        {
          subName: '数据存储',
          id: 'storage',
          containApis: [
            {
              apiName: 'setStorageSync',
              isSync: true
            },
            {
              apiName: 'getStorageSync',
              isSync: true
            },
            {
              apiName: 'clearStorageSync',
              isSync: true
            },
            {
              apiName: 'getStorageInfoSync',
              isSync: true
            }
          ]
        },
        {
          subName: '异步数据存储',
          id: 'storage-async',
          containApis: [
            'setStorage',
            'getStorage',
            'clearStorage',
            'getStorageInfo'
          ]
        }
      ]
    }, 

    {
      icon: '../../image/meiti.png',
      name: '媒体',
      open: false,
      list: [
        {
          subName: '图片',
          id: 'image',
          containApis: [
            'chooseImage',
            'previewImage',
            'saveImageToPhotosAlbum',
            'getImageInfo'
          ]
        }, 
        {
          subName: '视频',
          id: 'video',
          show: 'no',
          // containApis: [
          //   'chooseVideo'
          // ]
        }, 
      ]
    }, 

    {
      icon: '../../image/weizhi.png',
      name: '位置',
      open: false,
      list: [
        {
          subName: '获取位置',
          id: 'get-location',
          containApis: [
            'getLocation',
            'startLocationUpdate',
            'startLocationUpdateBackground',
            'stopLocationUpdate',
            'chooseLocation',
            'openLocation'
          ]
        },
        {
          subName: '地图控制',
          id: 'map'
        }, 
      ]
    }, 

    {
      icon: '../../image/kaifangjiekou.png',
      name: '开放接口',
      open: false,
      list: [
        {
          subName: '登录',
          id: 'login',
          containApis: [
            'login'
          ]
        },
        {
          subName: '检验登陆态',
          id: 'check-session',
          containApis: [
            'checkSession'
          ]
        },
        {
          subName: '支付',
          id: 'request-payment'
        }, 
        {
          subName: '分享',
          id: 'share',
          containApis: [
            'share',
            'showShareMenu',
            'hideShareMenu'
          ]
        },
        {
          subName: '授权设置',
          id: 'setting',
          containApis: [
            'authorize',
            'getSetting',
            'openSetting'
          ]
        }, 
        {
          subName: '选择收货地址',
          id: 'choose-address',
          containApis: [
            'chooseAddress'
          ]
        }, 
        {
          subName: '  获取用户信息',
          id: 'get-user-info',
          containApis: [
            'getUserProfile'
          ]
        }, 
        {
          subName: '  获取账号信息',
          id: 'get-account-info-sync',
          containApis: [
            {
              apiName: 'getAccountInfoSync',
              isSync: true
            },
            'openUserProfile'
          ]
        }, 
        {
          subName: '节点查询',
          id: 'query'
        },
        {
          subName: '监听节点',
          id: 'observer'
        },
        {
          subName: 'webview的sdk接口',
          id: 'webview'
        },
        {
          subName: '生命周期',
          id: 'lifetime'
        }
      ]
    }, 

    {
      icon: '../../image/shebei.png',
      name: '设备',
      open: false,
      list: [
        {
          subName: '剪贴板',
          id: 'clipboard-data',
          containApis: [
            'setClipboardData',
            'getClipboardData'
          ]
        }, 
        {
          subName: '获取手机网络类型',
          id: 'get-network-type',
          containApis: [
            'getNetworkType'
          ]
        },
        {
          subName: '拨打电话',
          id: 'make-phone-call',
          containApis: [
            'makePhoneCall'
          ]
        },
        {
          subName: '扫码',
          id: 'scan-code',
          containApis: [
            'scanCode'
          ]
        }, 
      ]
    }, 
    {
      icon: '../../image/sanfangpingtai.png',
      name: '第三方平台',
      open: false,
      list: [
        {
          subName: '获取第三方数据',
          id: 'ext-config',
          containApis: [
            'getExtConfig',
            {
              apiName: 'getExtConfigSync',
              isSync: true
            }
          ]
        }
      ]
    },
  ],
  requestUrl: 'https://e.xiaohongshu.com/home',
};