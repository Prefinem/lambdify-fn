"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.constant = void 0;

const constant = func => async params => {
  await func(params);
  return params;
};

exports.constant = constant;
var _default = constant;
exports.default = _default;