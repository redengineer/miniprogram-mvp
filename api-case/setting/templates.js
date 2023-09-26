/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: "",

    page_data_1: false,

    page_data_2: false,

    page_data_3: false,

    page_data_4: "",

    page_data_5: false,

    page_data_6: false,

    page_data_7: false,

    page_data_8: "",

    page_data_9: false,

    page_data_10: false,

    page_data_11: false,

    page_data_12: "",
  },

  page_fun_1(e) {
    this.setData("page_data_0", e.detail.value);
  },

  page_fun_0() {
    this.setData({
      page_data_1: false,
      page_data_2: false,
      page_data_3: false,
    });

    xhs.authorize({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_1: true,
          page_data_4: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_2: true,
          page_data_4: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_3: true,
        });
      },
      scope: this.data.page_data_0,
    });
  },

  page_fun_2() {
    this.setData({
      page_data_5: false,
      page_data_6: false,
      page_data_7: false,
    });

    xhs.getSetting({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_5: true,
          page_data_8: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_6: true,
          page_data_8: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_7: true,
        });
      },
    });
  },

  page_fun_3() {
    this.setData({
      page_data_9: false,
      page_data_10: false,
      page_data_11: false,
    });

    xhs.openSetting({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_9: true,
          page_data_12: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_10: true,
          page_data_12: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_11: true,
        });
      },
    });
  },
};
