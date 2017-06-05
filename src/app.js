import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import {initDB} from './util/sqlite';

const app = express();
app.use(bodyParser.json());
initDB();

routes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
