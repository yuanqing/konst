'use strict';

var konst = function(constants) {
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

module.exports = konst;
