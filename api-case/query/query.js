Page({
  onShareAppMessage() {
    return {
      title: 'query',
      path: '/api-case/query/query',
    };
  },

  data: {
    content: '',
    content2: '',
    content3: ''
  },


  handleGetQuery() {
    const _this = this;
    const query = xhs.createSelectorQuery();
    query.select('#box').boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(function(res){
      _this.setData({
        content: JSON.stringify(res)
      });
    });
  },

  handleGetQueryAll() {
    const _this = this;
    const query = xhs.createSelectorQuery();
    query.selectAll('.box').boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(function(res){
      _this.setData({
        content2: JSON.stringify(res)
      });
    });
  },

  selectViewport() {
    const _this = this;
    xhs.createSelectorQuery()
      .selectViewport()
      .scrollOffset(res => {
        _this.setData({
          content3: JSON.stringify(res)
        });
      }).exec();
  }

});
