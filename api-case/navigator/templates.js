/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: "",

    page_data_1: false,

    page_data_2: false,

    page_data_3: false,

    page_data_4: "",

    page_data_5: "",

    page_data_6: false,

    page_data_7: false,

    page_data_8: false,

    page_data_9: "",

    page_data_10: "",

    page_data_11: false,

    page_data_12: false,

    page_data_13: false,

    page_data_14: "",

    page_data_15: "",

    page_data_16: false,

    page_data_17: false,

    page_data_18: false,

    page_data_19: "",

    page_data_20: "",

    page_data_21: false,

    page_data_22: false,

    page_data_23: false,

    page_data_24: "",

    page_data_25: false,

    page_data_26: false,

    page_data_27: false,

    page_data_28: "",
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

    xhs.navigateBack({
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
      delta: this.data.page_data_0,
    });
  },

  page_fun_3(e) {
    this.setData("page_data_5", e.detail.value);
  },

  page_fun_2() {
    this.setData({
      page_data_6: false,
      page_data_7: false,
      page_data_8: false,
    });

    xhs.navigateTo({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_6: true,
          page_data_9: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_7: true,
          page_data_9: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_8: true,
        });
      },
      url: this.data.page_data_5,
    });
  },

  page_fun_5(e) {
    this.setData("page_data_10", e.detail.value);
  },

  page_fun_4() {
    this.setData({
      page_data_11: false,
      page_data_12: false,
      page_data_13: false,
    });

    xhs.reLaunch({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_11: true,
          page_data_14: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_12: true,
          page_data_14: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_13: true,
        });
      },
      url: this.data.page_data_10,
    });
  },

  page_fun_7(e) {
    this.setData("page_data_15", e.detail.value);
  },

  page_fun_6() {
    this.setData({
      page_data_16: false,
      page_data_17: false,
      page_data_18: false,
    });

    xhs.redirectTo({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_16: true,
          page_data_19: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_17: true,
          page_data_19: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_18: true,
        });
      },
      url: this.data.page_data_15,
    });
  },

  page_fun_9(e) {
    this.setData("page_data_20", e.detail.value);
  },

  page_fun_8() {
    this.setData({
      page_data_21: false,
      page_data_22: false,
      page_data_23: false,
    });

    xhs.switchTab({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_21: true,
          page_data_24: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_22: true,
          page_data_24: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_23: true,
        });
      },
      url: this.data.page_data_20,
    });
  },

  page_fun_10() {
    this.setData({
      page_data_25: false,
      page_data_26: false,
      page_data_27: false,
    });

    xhs.exitMiniProgram({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_25: true,
          page_data_28: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_26: true,
          page_data_28: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_27: true,
        });
      },
    });
  },
};
