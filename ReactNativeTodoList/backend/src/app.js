import express from 'express';
import tasksRoutes from './routes/routes.js';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './SwaggerOptions.js';

const specs = swaggerJSDoc(options);

// Initialize the Express app
const app = express();

// Enable CORS
app.use(cors());

// Enable logging
app.use(morgan('dev'));

// Parse request body as JSON (for POST requests)
app.use(express.json());

// Define routes
app.use(tasksRoutes);

// Swagger UI
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;
