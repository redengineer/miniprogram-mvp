/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: "",

    page_data_1: "",

    page_data_2: "",

    page_data_3: false,

    page_data_4: false,

    page_data_5: false,

    page_data_6: "",

    page_data_7: false,

    page_data_8: false,

    page_data_9: false,

    page_data_10: "",

    page_data_11: false,

    page_data_12: false,

    page_data_13: false,

    page_data_14: "",
  },

  page_fun_1(e) {
    this.setData("page_data_0", e.detail.value);
  },

  page_fun_2(e) {
    this.setData("page_data_1", e.detail.value);
  },

  page_fun_3(e) {
    this.setData("page_data_2", e.detail.value);
  },

  page_fun_0() {
    this.setData({
      page_data_3: false,
      page_data_4: false,
      page_data_5: false,
    });

    xhs.share({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_3: true,
          page_data_6: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_4: true,
          page_data_6: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_5: true,
        });
      },
      title: this.data.page_data_0,
      path: this.data.page_data_1,
      imageUrl: this.data.page_data_2,
    });
  },

  page_fun_4() {
    this.setData({
      page_data_7: false,
      page_data_8: false,
      page_data_9: false,
    });

    xhs.showShareMenu({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_7: true,
          page_data_10: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_8: true,
          page_data_10: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_9: true,
        });
      },
    });
  },

  page_fun_5() {
    this.setData({
      page_data_11: false,
      page_data_12: false,
      page_data_13: false,
    });

    xhs.hideShareMenu({
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
    });
  },
};
