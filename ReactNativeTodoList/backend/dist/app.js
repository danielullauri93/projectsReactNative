"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _routes = _interopRequireDefault(require("./routes/routes.js"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _SwaggerOptions = require("./SwaggerOptions.js");
var specs = (0, _swaggerJsdoc["default"])(_SwaggerOptions.options);

// Initialize the Express app
var app = (0, _express["default"])();

// Enable CORS
app.use((0, _cors["default"])());

// Enable logging
app.use((0, _morgan["default"])('dev'));

// Parse request body as JSON (for POST requests)
app.use(_express["default"].json());

// Define routes
app.use(_routes["default"]);

// Swagger UI
app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var _default = exports["default"] = app;