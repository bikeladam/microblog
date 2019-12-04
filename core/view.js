<<<<<<< HEAD
var path = require('path'),
  nun = require("nunz"),
  md = require('node-markdown').Markdown;


function init(viewRoot, compress, cache) {
  exports.viewRoot = viewRoot || path.join(__dirname, '../views'),
    exports.compress = compress || false,
    exports.cache = cache || false
}

function render(tpl, ctx, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = undefined;
  }
  options = options || exports;
  nun.render(path.join(exports.viewRoot, tpl), ctx, options, function (err, output) {
    if (err) {
      throw err;
    }
    var buffer = '';
    output.addListener('data', function (c) {
      buffer += c;
    })
      .addListener('end', function () {
        callback(buffer);
      });
  });
}

exports.init = init;
exports.render = render;
=======
var path = require('path'),
  nun = require("nunz"),
  md = require('node-markdown').Markdown;


function init(viewRoot, compress, cache) {
  exports.viewRoot = viewRoot || path.join(__dirname, '../views'),
    exports.compress = compress || false,
    exports.cache = cache || false
}

function render(tpl, ctx, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = undefined;
  }
  options = options || exports;
  nun.render(path.join(exports.viewRoot, tpl), ctx, options, function (err, output) {
    if (err) {
      throw err;
    }
    var buffer = '';
    output.addListener('data', function (c) {
      buffer += c;
    })
      .addListener('end', function () {
        callback(buffer);
      });
  });
}

exports.init = init;
exports.render = render;
>>>>>>> 1cab6b0d99a1efd47c952fd7c52a0f48dbc6ca8d
exports.markdown = md;