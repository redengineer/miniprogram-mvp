/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: "",

    page_data_1: "",

    page_data_2: "",

    page_data_3: "",

    page_data_4: "",

    page_data_5: "",

    page_data_6: "",

    page_data_7: false,

    page_data_8: false,

    page_data_9: false,

    page_data_10: "",
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

  page_fun_4(e) {
    this.setData("page_data_3", e.detail.value);
  },

  page_fun_5(e) {
    this.setData("page_data_4", e.detail.value);
  },

  page_fun_6(e) {
    this.setData("page_data_5", e.detail.value);
  },

  page_fun_7(e) {
    this.setData("page_data_6", e.detail.value);
  },

  page_fun_0() {
    this.setData({
      page_data_7: false,
      page_data_8: false,
      page_data_9: false,
    });

    xhs.request({
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
      url: this.data.page_data_0,
      data: this.data.page_data_1,
      header: this.data.page_data_2,
      timeout: this.data.page_data_3,
      method: this.data.page_data_4,
      dataType: this.data.page_data_5,
      responseType: this.data.page_data_6,
    });
  },
};
