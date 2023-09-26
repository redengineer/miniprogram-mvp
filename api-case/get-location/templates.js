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

    page_data_13: false,

    page_data_14: false,

    page_data_15: false,

    page_data_16: "",

    page_data_17: "",

    page_data_18: "",

    page_data_19: false,

    page_data_20: false,

    page_data_21: false,

    page_data_22: "",

    page_data_23: "",

    page_data_24: "",

    page_data_25: "",

    page_data_26: "",

    page_data_27: "",

    page_data_28: false,

    page_data_29: false,

    page_data_30: false,

    page_data_31: "",
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

    xhs.getLocation({
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
      type: this.data.page_data_0,
    });
  },

  page_fun_2() {
    this.setData({
      page_data_5: false,
      page_data_6: false,
      page_data_7: false,
    });

    xhs.startLocationUpdate({
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

    xhs.startLocationUpdateBackground({
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

  page_fun_4() {
    this.setData({
      page_data_13: false,
      page_data_14: false,
      page_data_15: false,
    });

    xhs.stopLocationUpdate({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_13: true,
          page_data_16: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_14: true,
          page_data_16: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_15: true,
        });
      },
    });
  },

  page_fun_6(e) {
    this.setData("page_data_17", e.detail.value);
  },

  page_fun_7(e) {
    this.setData("page_data_18", e.detail.value);
  },

  page_fun_5() {
    this.setData({
      page_data_19: false,
      page_data_20: false,
      page_data_21: false,
    });

    xhs.chooseLocation({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_19: true,
          page_data_22: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_20: true,
          page_data_22: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_21: true,
        });
      },
      latitude: this.data.page_data_17,
      longitude: this.data.page_data_18,
    });
  },

  page_fun_9(e) {
    this.setData("page_data_23", e.detail.value);
  },

  page_fun_10(e) {
    this.setData("page_data_24", e.detail.value);
  },

  page_fun_11(e) {
    this.setData("page_data_25", e.detail.value);
  },

  page_fun_12(e) {
    this.setData("page_data_26", e.detail.value);
  },

  page_fun_13(e) {
    this.setData("page_data_27", e.detail.value);
  },

  page_fun_8() {
    this.setData({
      page_data_28: false,
      page_data_29: false,
      page_data_30: false,
    });

    xhs.openLocation({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_28: true,
          page_data_31: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_29: true,
          page_data_31: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_30: true,
        });
      },
      latitude: this.data.page_data_23,
      longitude: this.data.page_data_24,
      scale: this.data.page_data_25,
      name: this.data.page_data_26,
      address: this.data.page_data_27,
    });
  },
};
