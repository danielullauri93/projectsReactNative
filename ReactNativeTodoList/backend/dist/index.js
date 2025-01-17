"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var port = process.env.PORT || 3000;
_app["default"].listen(port, function () {
  console.log("Server running at http://localhost:".concat(port));
});