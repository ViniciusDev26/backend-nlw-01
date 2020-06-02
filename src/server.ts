import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import cors from 'cors';
import path from 'path';
require('dotenv').config()

const app = express();

app.use(cors());
app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')));
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
