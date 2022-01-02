import cookieParser from 'cookie-parser';
import express from 'express';
import actuator from 'express-actuator';
import logger from 'morgan';
import path from 'path';
import config from './config';
import IGFPRs from './models/IGFPRs';
 
import routerGFP from './routes/router';

const app = express();
const apiPath = config.apiPath;
const fullApiPath = `${apiPath}/V1/Enterprise/crud-gfp/`;
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../static')));
app.use((_req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*'); // NOSONAR
   res.header(
       'Access-Control-Allow-Headers',
       'Authorization, X-API-KEY, Origin, X-Requested-With,' +
       'Content-Type, Accept, Access-Control-Allow-Request-Method'
   );
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
});

app.use(fullApiPath, routerGFP);

app.use((err: any, req: any, res: any, next:any) => {
   res.status(err.statusCode).json({
      data: {
         status: err.statusCode,
         description: err.message
      }
   });
});

app.use(actuator({
   basePath: '/management'
}));

export default app;