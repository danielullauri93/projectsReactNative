"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.saveTask = exports.getTaskId = exports.getTaskCount = exports.getTask = exports.deleteTask = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../db/database.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getTask = exports.getTask = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connect, _yield$connect$query, _yield$connect$query2, rows;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _database.connection)();
        case 2:
          connect = _context.sent;
          _context.next = 5;
          return connect.query('SELECT * FROM tasks');
        case 5:
          _yield$connect$query = _context.sent;
          _yield$connect$query2 = (0, _slicedToArray2["default"])(_yield$connect$query, 1);
          rows = _yield$connect$query2[0];
          res.status(200).json(rows);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getTaskId = exports.getTaskId = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connect, _yield$connect$query3, _yield$connect$query4, rows;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _database.connection)();
        case 2:
          connect = _context2.sent;
          _context2.next = 5;
          return connect.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
        case 5:
          _yield$connect$query3 = _context2.sent;
          _yield$connect$query4 = (0, _slicedToArray2["default"])(_yield$connect$query3, 1);
          rows = _yield$connect$query4[0];
          res.status(200).json(rows);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getTaskId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getTaskCount = exports.getTaskCount = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connect, _yield$connect$query5, _yield$connect$query6, rows;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _database.connection)();
        case 3:
          connect = _context3.sent;
          _context3.next = 6;
          return connect.query('SELECT COUNT(*) AS total FROM tasks');
        case 6:
          _yield$connect$query5 = _context3.sent;
          _yield$connect$query6 = (0, _slicedToArray2["default"])(_yield$connect$query5, 1);
          rows = _yield$connect$query6[0];
          res.status(200).json(rows[0]['total']);
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.error('Error en getTaskCount:', _context3.t0.message);
          res.status(500).json({
            message: 'Internal Server Error'
          });
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function getTaskCount(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var saveTask = exports.saveTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var connect, _yield$connect$query7, _yield$connect$query8, results;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _database.connection)();
        case 3:
          connect = _context4.sent;
          _context4.next = 6;
          return connect.query('INSERT INTO tasks (title,description) VALUES (?,?)', [req.body.title, req.body.description]);
        case 6:
          _yield$connect$query7 = _context4.sent;
          _yield$connect$query8 = (0, _slicedToArray2["default"])(_yield$connect$query7, 1);
          results = _yield$connect$query8[0];
          res.status(201).json(_objectSpread(_objectSpread({}, req.body), {}, {
            message: 'Task created successfully',
            id: results.insertId
          }));
          _context4.next = 16;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.error('Error en saveTask:', _context4.t0.message);
          res.status(500).json({
            message: 'Internal Server Error'
          });
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function saveTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateTask = exports.updateTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connect;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _database.connection)();
        case 3:
          connect = _context5.sent;
          _context5.next = 6;
          return connect.query('UPDATE tasks SET title =?, description =? WHERE id =?', [req.body.title, req.body.description, req.params.id]);
        case 6:
          res.status(200).json({
            message: 'Task updated successfully'
          });
          _context5.next = 13;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error('Error en updateTask:', _context5.t0.message);
          res.status(500).json({
            message: 'Internal Server Error'
          });
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function updateTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteTask = exports.deleteTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var connect;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _database.connection)();
        case 2:
          connect = _context6.sent;
          _context6.next = 5;
          return connect.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
        case 5:
          res.status(200).json({
            message: 'Task deleted successfully'
          });
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function deleteTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();