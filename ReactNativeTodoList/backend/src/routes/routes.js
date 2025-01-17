import { Router } from 'express';
import {
  deleteTask,
  getTask,
  getTaskCount,
  getTaskId,
  saveTask,
  updateTask,
} from '../controllers/tasks.controller.js';

const routes = Router();

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
routes.get('/tasks', getTask);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get total tasks counter 
 *    tags: [Tasks]
 *    description: Retrieve the total number of tasks
 */
routes.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get a task by id
 *    tags: [Tasks]
 *    description: Retrieve a task by its unique ID
 */
routes.get('/tasks/:id', getTaskId);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Save a new task
 *    tags: [Tasks]
 *    description: Create a new task and save it to the database
 */
routes.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 *    description: Update an existing task by its ID
 */
routes.put('/tasks/:id', updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: Delete a task by id
 *    tags: [Tasks]
 *    description: Delete a specific task by its ID
 */
routes.delete('/tasks/:id', deleteTask);

export default routes;
