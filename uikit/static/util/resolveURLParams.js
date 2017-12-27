/**
 * 将当前页面 URL 中的查询字符串转换为对象形式
 */

(function () {
  return function resolveURLParams () {
    var params = {};
    var query = decodeURIComponent(location.href).split('?')[1];

    if (query) {
      query.split('&').forEach(function (pair) {
        var arr = pair.split('=');
        params[arr[0]] = arr[1];
      })
    }

    return params
  }
})();