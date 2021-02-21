import swaggerJsDoc from 'swagger-jsdoc';
import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

const docs = Router();
const swaggerOptions = {
  definition: {
    openapi: `3.0.0`,
    info: {
      title: `my-template`,
      version: `0.0.1`,
    },
    servers: [
      {
        url: `http://localhost:4000/`,
      },
    ],
  },
  apis: [`src/routes/*.ts`],
};
const swaggerSpecs = swaggerJsDoc(swaggerOptions);

docs.use(swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

export default docs;
