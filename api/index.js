import express from 'express';
import db from './server/src/models';
import http from 'http';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import RecipeRoutes from './server/routes/RecipeRoutes';

const app = express();

// all environments
if(process.env.NODE_ENV == 'development') {
  app.set('port', 8000);
} else {
  app.set('port', process.env.PORT || 80);
}

// app.use(favicon(path.resolve(__dirname, '../client/images/favicon.ico')));
app.use(cors()); // 全てのAPIをCORS許可
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1/recipes', RecipeRoutes);  // routres


if(process.env.NODE_ENV == 'production') {
  app.use(express.static(path.resolve(__dirname, '../dist')));

} else if(process.env.NODE_ENV == 'development') {
  app.get('*', function(req, res) {
    res.send('api');
  });
  console.log(`Seems like the backend is running fine on ${process.env.NODE_ENV}`);

} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  console.log('Testing for the production enviroment.');
}


db.sequelize.sync().then(function() {
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});

export default app;