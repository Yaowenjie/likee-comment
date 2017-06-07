import {db} from '../util/sqlite';

const fns = {
  saveThread: (thread) => {
    try {
      const result = db.prepare('insert into thread values(?, ?, ?, ?, ?, ?, ?, ?, ?);')
        .run(
          Number(thread.site_id),
          thread.id,
          thread.created_at,
          thread.created_at,
          thread.likes,
          0,
          thread.thread_key,
          thread.title,
          thread.url
        );
      return result.changes && result.lastInsertROWID ? {'status': 'success'} : {'status': 'failed'};
    } catch (e) {
      return {'status': 'failed', 'error': e.message};
    }
  },
  findThreadByKey: (key) => {
    return db.prepare('SELECT * FROM thread WHERE thread_key=?').get(key);
  }
};

module.exports = fns;
