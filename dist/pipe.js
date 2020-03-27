"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.pipe = void 0;

const pipe = (...funcs) => async param => funcs.length === 0 ? param : pipe(...funcs.slice(1))((await funcs[0](param)));

exports.pipe = pipe;
var _default = pipe;
exports.default = _default;