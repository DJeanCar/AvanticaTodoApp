import express from 'express';
import template from './config/template';
import staticFiles from './config/static';
import bodyParser from './config/bodyParser';
import routes from './config/routes';

const app = express();
bodyParser(app);
template(app);
staticFiles(app);
routes(app);

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
