/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: "",

    page_data_1: "",

    page_data_2: false,

    page_data_3: false,

    page_data_4: false,

    page_data_5: "",

    page_data_6: false,

    page_data_7: false,

    page_data_8: false,

    page_data_9: "",
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

    xhs.showLoading({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_2: true,
          page_data_5: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_3: true,
          page_data_5: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_4: true,
        });
      },
      title: this.data.page_data_0,
      mask: this.data.page_data_1,
    });
  },

  page_fun_3() {
    this.setData({
      page_data_6: false,
      page_data_7: false,
      page_data_8: false,
    });

    xhs.hideLoading({
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
    });
  },
};
