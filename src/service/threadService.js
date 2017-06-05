import {db} from '../util/sqlite';

const fns = {
  saveThread: (thread) => {
    try {
      const result = db.prepare('insert into thread values(?, ?, ?, ?, ?, ?, ?);')
        .run(thread.id, thread.created_at, thread.likes, thread.title, thread.url, thread.key, thread.site_id);
      return result.changes && result.lastInsertROWID ? {'status': 'success'} : {'status': 'failed'};
    } catch (e) {
      return {'status': 'failed', 'error': e.message}
    }
  },
  updateThread: (thread) => {

  }
};

module.exports = fns;
