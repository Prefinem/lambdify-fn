"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.insert = void 0;

const insertArray = (index, func) => async params => [...params.slice(0, index - 1), await func(params), ...params.slice(index - 1)];

const insertObject = (index, func) => async params => ({ ...params,
  [index]: await func(params)
});

const insert = (index, func) => params => Array.isArray(params) ? insertArray(index, func)(params) : insertObject(index, func)(params);

exports.insert = insert;
var _default = insert;
exports.default = _default;