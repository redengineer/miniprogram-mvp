const formatJsonForNotes = require("../../../util/formatJson");

Component({
  properties: {
    success: {
      type: Boolean,
      value: false,
    },
    fail: {
      type: Boolean,
      value: false,
    },
    complete: {
      type: Boolean,
      value: false,
    },
    text: {
      type: String,
      value: ''
    }
  },

  data: {
    formatText: ''
  }, 

  observers: {
    text(value) {
      let t = '';
      try {
        t = formatJsonForNotes(value);
      } catch(err) {
        t = value || '无返回值';
      }
      this.setData('formatText', t);
    }
  }
});
