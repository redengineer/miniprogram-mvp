/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: false,

    page_data_1: false,

    page_data_2: false,

    page_data_3: "",
  },

  page_fun_0() {
    this.setData({
      page_data_0: false,
      page_data_1: false,
      page_data_2: false,
    });

    xhs.checkSession({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_0: true,
          page_data_3: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_1: true,
          page_data_3: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_2: true,
        });
      },
    });
  },
};
