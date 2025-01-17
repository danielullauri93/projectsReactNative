"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasksController = require("../controllers/tasks.controller.js");
var routes = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management API
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all tasks
 *    tags: [Tasks]
 *    description: Retrieve a list of all tasks
 */
routes.get('/tasks', _tasksController.getTask);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get total tasks counter 
 *    tags: [Tasks]
 *    description: Retrieve the total number of tasks
 */
routes.get('/tasks/count', _tasksController.getTaskCount);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get a task by id
 *    tags: [Tasks]
 *    description: Retrieve a task by its unique ID
 */
routes.get('/tasks/:id', _tasksController.getTaskId);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Save a new task
 *    tags: [Tasks]
 *    description: Create a new task and save it to the database
 */
routes.post('/tasks', _tasksController.saveTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 *    description: Update an existing task by its ID
 */
routes.put('/tasks/:id', _tasksController.updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: Delete a task by id
 *    tags: [Tasks]
 *    description: Delete a specific task by its ID
 */
routes["delete"]('/tasks/:id', _tasksController.deleteTask);
var _default = exports["default"] = routes;