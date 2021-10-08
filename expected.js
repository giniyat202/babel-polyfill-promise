"use strict";

var _allSettled = _interopRequireDefault(require("core-js-pure/features/promise/all-settled.js"));

var _any = _interopRequireDefault(require("core-js-pure/features/promise/any.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Promise.all();
(0, _allSettled.default)();
(0, _any.default)();
Promise.race();

