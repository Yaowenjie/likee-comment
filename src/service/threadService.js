import {db} from '../util/sqlite';

const fns = {
  saveThread: (thread) => {
    try {
      const result = db.prepare('insert into thread values(?, ?, ?, ?, ?, ?, ?, ?, ?);')
        .run(
          thread.site_id,
          thread.id,
          thread.created_at,
          thread.created_at,
          thread.likes,
          0,
          thread.key,
          thread.title,
          thread.url
        );
      return result.changes && result.lastInsertROWID ? {'status': 'success'} : {'status': 'failed'};
    } catch (e) {
      return {'status': 'failed', 'error': e.message};
    }
  }
};

module.exports = fns;
