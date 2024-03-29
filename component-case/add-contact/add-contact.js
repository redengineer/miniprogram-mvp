Page({
  onShareAppMessage() {
    return {
      title: '新增联系人',
      path: 'packageAPI/pages/add-contact/add-contact',
    };
  },

  submit(e) {
    const formData = e.detail.value;
    xhs?.addPhoneContact({
      ...formData,
      success() {
        xhs?.showToast({
          title: '联系人创建成功',
        });
      },
      fail() {
        xhs?.showToast({
          title: '联系人创建失败',
        });
      },
    });
  },
});
