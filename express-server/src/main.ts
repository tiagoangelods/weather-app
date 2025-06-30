/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import swaggerUi from 'swagger-ui-express';
import {swaggerSpec} from './utils/swagger';
import express from 'express';
import cors from 'cors';
import {weatherRouter} from './routes';

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL/port
}))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', weatherRouter)

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
