import express from 'express';
import bodyParser from 'body-parser';
import Database from 'better-sqlite3';

const app = express();
const db = new Database('comment.db');
app.use( bodyParser.json() );
db.prepare('CREATE TABLE IF NOT EXISTS thread (id INTEGER, created_at STRING, likes INTEGER, title STRING, url STRING, key STRING)').run()

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  const thread = req.body
  let row = db.prepare('insert into thread values(?, ?, ?, ?, ?, ?);').run(thread.id, thread.created_at, thread.likes, thread.title, thread.url, thread.key)
  res.send('Hello post!')
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
