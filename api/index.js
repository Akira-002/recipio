import express from 'express';
import http from 'http';
import path from 'path';


const app = express();


// all environments
if(process.env.NODE_ENV == 'development') {
  app.set('port', 8000);
} else {
  app.set('port', process.env.PORT || 80);
}


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



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

export default app;