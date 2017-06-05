import Database from 'better-sqlite3';

const db = new Database('comment.db');

const fns = {
  db: db,
  initDB: () => {
    const threadSchema = 'thread (id INTEGER PRIMARY KEY, created_at STRING, likes INTEGER, title STRING, url STRING, key STRING, site_id STRING)';
    db.prepare('CREATE TABLE IF NOT EXISTS ' + threadSchema).run();
  }
};

module.exports = fns;
