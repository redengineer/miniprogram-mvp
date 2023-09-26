/** 以下内容为自动生成，请勿手动修改 */

module.exports = {
  data: {
    page_data_0: false,

    page_data_1: false,

    page_data_2: false,

    page_data_3: "",

    page_data_4: false,

    page_data_5: false,

    page_data_6: false,

    page_data_7: "",
  },

  page_fun_0() {
    this.setData({
      page_data_0: false,
      page_data_1: false,
      page_data_2: false,
    });

    xhs.getExtConfig({
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

  page_fun_1() {
    this.setData({
      page_data_4: false,
      page_data_5: false,
      page_data_6: false,
    });

    let res;
    try {
      res = xhs.getExtConfigSync() ?? "无返回值";
    } catch (err) {
      console.log("fail", res);
      this.setData({
        page_data_5: true,
        page_data_7: JSON.stringify(res),
      });

      return;
    }

    console.log("success", res);
    this.setData({
      page_data_4: true,
      page_data_7: JSON.stringify(res),
    });

    console.log("complete", res);
    this.setData({
      page_data_6: true,
    });
  },
};
