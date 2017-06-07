import Database from 'better-sqlite3';
import {threadSchema} from '../constant/schema';

const db = new Database('comment.db');

const initDB = () => {
  db.prepare('CREATE TABLE IF NOT EXISTS ' + threadSchema).run();
};

module.exports = {db, initDB};
