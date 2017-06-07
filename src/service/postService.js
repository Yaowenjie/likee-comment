import {db} from '../util/sqlite';

const fns = {
  savePost: (post) => {
    try {
      const result = db.prepare('insert into post values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);')
        .run(
          post.id,
          post.thread_id,
          post.message,
          post.site_id,
          post.created_at,
          post.created_at,
          post.likes,
          post.ip,
          post.parents,
          post.author_id,
          post.author_email,
          post.author_url
        );
      return result.changes && result.lastInsertROWID ? {'status': 'success'} : {'status': 'failed'};
    } catch (e) {
      return {'status': 'failed', 'error': e.message};
    }
  }
};

module.exports = fns;
