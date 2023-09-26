/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: "",

    page_data_1: "",

    page_data_2: false,

    page_data_3: false,

    page_data_4: false,

    page_data_5: "",

    page_data_6: "",

    page_data_7: false,

    page_data_8: false,

    page_data_9: false,

    page_data_10: "",

    page_data_11: false,

    page_data_12: false,

    page_data_13: false,

    page_data_14: "",

    page_data_15: false,

    page_data_16: false,

    page_data_17: false,

    page_data_18: "",
  },

  page_fun_1(e) {
    this.setData("page_data_0", e.detail.value);
  },

  page_fun_2(e) {
    this.setData("page_data_1", e.detail.value);
  },

  page_fun_0() {
    this.setData({
      page_data_2: false,
      page_data_3: false,
      page_data_4: false,
    });

    let res;
    try {
      res =
        xhs.setStorageSync(this.data.page_data_0, this.data.page_data_1) ??
        "无返回值";
    } catch (err) {
      console.log("fail", res);
      this.setData({
        page_data_3: true,
        page_data_5: JSON.stringify(res),
      });

      return;
    }

    console.log("success", res);
    this.setData({
      page_data_2: true,
      page_data_5: JSON.stringify(res),
    });

    console.log("complete", res);
    this.setData({
      page_data_4: true,
    });
  },

  page_fun_4(e) {
    this.setData("page_data_6", e.detail.value);
  },

  page_fun_3() {
    this.setData({
      page_data_7: false,
      page_data_8: false,
      page_data_9: false,
    });

    let res;
    try {
      res = xhs.getStorageSync(this.data.page_data_6) ?? "无返回值";
    } catch (err) {
      console.log("fail", res);
      this.setData({
        page_data_8: true,
        page_data_10: JSON.stringify(res),
      });

      return;
    }

    console.log("success", res);
    this.setData({
      page_data_7: true,
      page_data_10: JSON.stringify(res),
    });

    console.log("complete", res);
    this.setData({
      page_data_9: true,
    });
  },

  page_fun_5() {
    this.setData({
      page_data_11: false,
      page_data_12: false,
      page_data_13: false,
    });

    let res;
    try {
      res = xhs.clearStorageSync() ?? "无返回值";
    } catch (err) {
      console.log("fail", res);
      this.setData({
        page_data_12: true,
        page_data_14: JSON.stringify(res),
      });

      return;
    }

    console.log("success", res);
    this.setData({
      page_data_11: true,
      page_data_14: JSON.stringify(res),
    });

    console.log("complete", res);
    this.setData({
      page_data_13: true,
    });
  },

  page_fun_6() {
    this.setData({
      page_data_15: false,
      page_data_16: false,
      page_data_17: false,
    });

    let res;
    try {
      res = xhs.getStorageInfoSync() ?? "无返回值";
    } catch (err) {
      console.log("fail", res);
      this.setData({
        page_data_16: true,
        page_data_18: JSON.stringify(res),
      });

      return;
    }

    console.log("success", res);
    this.setData({
      page_data_15: true,
      page_data_18: JSON.stringify(res),
    });

    console.log("complete", res);
    this.setData({
      page_data_17: true,
    });
  },
};
