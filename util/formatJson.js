//格式化json
function formatJsonForNotes (json, options) {
  var reg = null,
    formatted = '',
    pad = 0,
    PADDING = '  '; // （缩进）可以使用'\t'或不同数量的空格
  // 可选设置
  options = options || {};
  // 在 '{' or '[' follows ':'位置移除新行
  options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
  // 在冒号后面加空格
  options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;
  // 开始格式化...
  if (typeof json !== 'string') {
    // 确保为JSON字符串
    json = JSON.stringify(json);
  } else {
    //已经是一个字符串，所以解析和重新字符串化以删除额外的空白
    json = JSON.parse(json);
    json = JSON.stringify(json);
  }
  // 在花括号前后添加换行
  reg = /([{}])/g;
  json = json.replace(reg, '\r\n$1\r\n');
  // 在方括号前后添加新行
  reg = /([[\]])/g;
  json = json.replace(reg, '\r\n$1\r\n');
  // 在逗号后添加新行
  reg = /(,)/g;
  json = json.replace(reg, '$1\r\n');
  // 删除多个换行
  reg = /(\r\n\r\n)/g;
  json = json.replace(reg, '\r\n');
  // 删除逗号前的换行
  reg = /\r\n,/g;
  json = json.replace(reg, ',');
  // 可选格式...
  if (!options.newlineAfterColonIfBeforeBraceOrBracket) {       
    reg = /:\r\n\{/g;
    json = json.replace(reg, ':{');
    reg = /:\r\n\[/g;
    json = json.replace(reg, ':[');
  }
  if (options.spaceAfterColon) {        
    reg = /:/g;
    json = json.replace(reg, ': ');
  }
  json.split('\r\n').forEach(function(node) {
    var i = 0,
      indent = 0,
      padding = '';
    if (node.match(/\{$/) || node.match(/\[$/)) {
      indent = 1;
    } else if (node.match(/\}/) || node.match(/\]/)) {
      if (pad !== 0) {
        pad -= 1;
      }
    } else {
      indent = 0;
    }
    for (i = 0; i < pad; i++) {
      padding += PADDING;
    }
    formatted += padding + node + '\r\n';
    pad += indent;
  });
  return formatted;
}

module.exports = formatJsonForNotes;
