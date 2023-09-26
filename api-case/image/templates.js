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

    page_data_7: "",

    page_data_8: "",

    page_data_9: "",

    page_data_10: false,

    page_data_11: false,

    page_data_12: false,

    page_data_13: "",

    page_data_14: "",

    page_data_15: false,

    page_data_16: false,

    page_data_17: false,

    page_data_18: "",

    page_data_19: "",

    page_data_20: false,

    page_data_21: false,

    page_data_22: false,

    page_data_23: "",
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

    xhs.chooseImage({
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
      count: this.data.page_data_0,
      sizeType: this.data.page_data_1,
      sourceType: this.data.page_data_2,
    });
  },

  page_fun_5(e) {
    this.setData("page_data_7", e.detail.value);
  },

  page_fun_6(e) {
    this.setData("page_data_8", e.detail.value);
  },

  page_fun_7(e) {
    this.setData("page_data_9", e.detail.value);
  },

  page_fun_4() {
    this.setData({
      page_data_10: false,
      page_data_11: false,
      page_data_12: false,
    });

    xhs.previewImage({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_10: true,
          page_data_13: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_11: true,
          page_data_13: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_12: true,
        });
      },
      urls: this.data.page_data_7,
      showmenu: this.data.page_data_8,
      current: this.data.page_data_9,
    });
  },

  page_fun_9(e) {
    this.setData("page_data_14", e.detail.value);
  },

  page_fun_8() {
    this.setData({
      page_data_15: false,
      page_data_16: false,
      page_data_17: false,
    });

    xhs.saveImageToPhotosAlbum({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_15: true,
          page_data_18: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_16: true,
          page_data_18: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_17: true,
        });
      },
      filePath: this.data.page_data_14,
    });
  },

  page_fun_11(e) {
    this.setData("page_data_19", e.detail.value);
  },

  page_fun_10() {
    this.setData({
      page_data_20: false,
      page_data_21: false,
      page_data_22: false,
    });

    xhs.getImageInfo({
      success: (res) => {
        console.log("success", res);
        this.setData({
          page_data_20: true,
          page_data_23: JSON.stringify(res),
        });
      },
      fail: (res) => {
        console.log("fail", res);
        this.setData({
          page_data_21: true,
          page_data_23: JSON.stringify(res),
        });
      },
      complete: (res) => {
        console.log("complete", res);
        this.setData({
          page_data_22: true,
        });
      },
      src: this.data.page_data_19,
    });
  },
};
