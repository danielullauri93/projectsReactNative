export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task API",
      version: "1.0.0",
      description: "API for managing tasks",
    },
  },
  apis: ["./src/routes/*.js"],
};