'use strict';

function isArray(object) {
  return Object.prototype.toString.call(object) === '[object Array]';
}

module.exports = function(constants) {
  if (! isArray(constants)) {
    constants = arguments;
  }
  var result = {};
  var i = -1;
  var len = constants.length;
  var constant;
  while (++i < len) {
    constant = constants[i];
    result[constant] = constant;
  }
  return result;
};
