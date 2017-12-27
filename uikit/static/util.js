// 本文件只包含通用的方法
// 例如与数字、字符串、数组、对象、时间等 native 数据类型处理相关的方法
// 不涉及具体业务
// 不涉及 BOM 或 DOM 的 API
// 特定场景的方法单独封装在 utils 文件夹下，单独引用

window.itz = window.itz || {};
itz.$ = itz.$ || {};

/**
 * 给字符串等间距的添加空格
 * 例如 '10241023102210' => '1024 1023 1022 10'
 *
 * @text { String } 
 * @postion { Number } 每隔多少位增加空格，默认为 4
 * @prefix { Boolean } 前置：'10241023102210' => '10 2410 2310 2210' （默认）
 *                     后置：'10241023102210' => '1024 1023 1022 10'  
 */
itz.$.addSpace = function (text, position, prefix) {
  var position = position || 4;
  prefix = prefix === undefined ? true : prefix;
  var str = String(text);
  if (!str || str.length <= position) return text;

  var mod = str.length % position;
  var init = prefix ? str.slice(0, mod) : '';
  var arr = prefix ? str.slice(mod).split('') : str.split('');
  return arr.reduce(function (pre, cur, index) {
    return pre + (index % position === 0 ? " " + cur : cur)
  }, init)
}