/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: "",

    page_data_1: false,

    page_data_2: false,

    page_data_3: false,

    page_data_4: "",
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

    xhs.makePhoneCall({
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
      phoneNumber: this.data.page_data_0,
    });
  },
};
