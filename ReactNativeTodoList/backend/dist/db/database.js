"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var _process$env = process.env,
  MYSQL_HOST = _process$env.MYSQL_HOST,
  MYSQL_USER = _process$env.MYSQL_USER,
  MYSQL_PASS = _process$env.MYSQL_PASS,
  MYSQL_DB = _process$env.MYSQL_DB;
var connection = exports.connection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var connect;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _promise["default"].createConnection({
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASS,
            database: MYSQL_DB
          });
        case 3:
          connect = _context.sent;
          return _context.abrupt("return", connect);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error al conectar a la base de datos:', _context.t0.message);
          throw _context.t0;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function connection() {
    return _ref.apply(this, arguments);
  };
}();