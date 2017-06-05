import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import {initDB} from './util/sqlite'

const app = express();
app.use( bodyParser.json() );
initDB();

routes(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// app.post('/', (req, res) => {
//   const thread = req.body
//   let row = db.prepare('insert into thread values(?, ?, ?, ?, ?, ?);').run(thread.id, thread.created_at, thread.likes, thread.title, thread.url, thread.key)
//   res.send('Hello post!')
// })

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
