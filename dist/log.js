"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.log = void 0;

var _constant = _interopRequireDefault(require("./constant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = (0, _constant.default)(params => console.log(JSON.stringify(params, 4, null)));
exports.log = log;
var _default = log;
exports.default = _default;