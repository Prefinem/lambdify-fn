"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.lens = void 0;

const lensArray = func => params => Promise.all(params.map(value => func(value)));

const lensObject = func => async params => (await Promise.all(Object.keys(params).map(key => func(params[key])))).reduce((result, value, index) => ({ ...result,
  [Object.keys(params)[index]]: value
}), {});

const lens = func => params => Array.isArray(params) ? lensArray(func)(params) : lensObject(func)(params);

exports.lens = lens;
var _default = lens;
exports.default = _default;