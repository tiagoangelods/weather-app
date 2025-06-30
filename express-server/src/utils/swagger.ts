import swaggerJsdoc,  { Options } from 'swagger-jsdoc';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Weather API',
      version: '1.0.0',
      description: 'Simple weather API with adapters for OpenWeather and AccuWeather',
    },
    servers: [
      { url: 'http://localhost:4001/api', description: 'Local API' },
    ],
  },
 apis: [__dirname + '/*.js'] // for compiled code
};

export const swaggerSpec = swaggerJsdoc(options);
