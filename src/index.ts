import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import coachRoutes from './routes/coachRoutes';

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { errorHandler } from './middlewares/errorHandler';

import morgan from 'morgan';
import fs from 'fs';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger_mentorium.yaml'));
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev')); 


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to Mentorium Space API!');
});

app.use('/api/coaches', coachRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  


