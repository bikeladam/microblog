<<<<<<< HEAD
var genji = require('genji');
var crypto = genji.require('crypto');
var auth = genji.require('auth');

function checkCookie(handler) {
  if (handler) {
    var cookie = handler.getCookie(module.exports.cookieName);
    return cookie ? auth.verify(crypto.base64Decode(cookie), module.exports.cookieSecret) : false;
  }
  return false;
}

function signin(user, credential, expire, data) {
  if (auth.checkPassword(credential, user["password"])) {
    var signed = auth.sign(user['username'], expire, data, module.exports.cookieSecret);
    return signed ? crypto.base64Encode(signed) : false;
  }
  return false;
}


module.exports = {
  checkCookie: checkCookie,
  makePassword: auth.makePassword,
  checkPassword: auth.checkPassword,
  signin: signin
=======
var genji = require('genji');
var crypto = genji.require('crypto');
var auth = genji.require('auth');

function checkCookie(handler) {
  if (handler) {
    var cookie = handler.getCookie(module.exports.cookieName);
    return cookie ? auth.verify(crypto.base64Decode(cookie), module.exports.cookieSecret) : false;
  }
  return false;
}

function signin(user, credential, expire, data) {
  if (auth.checkPassword(credential, user["password"])) {
    var signed = auth.sign(user['username'], expire, data, module.exports.cookieSecret);
    return signed ? crypto.base64Encode(signed) : false;
  }
  return false;
}


module.exports = {
  checkCookie: checkCookie,
  makePassword: auth.makePassword,
  checkPassword: auth.checkPassword,
  signin: signin
>>>>>>> 1cab6b0d99a1efd47c952fd7c52a0f48dbc6ca8d
};