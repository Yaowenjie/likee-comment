export const threadSchema = 'thread (' +
  'site_id STRING, ' +
  'thread_id INTEGER PRIMARY KEY, ' +
  'created_at STRING, ' +
  'updated_at STRING, ' +
  'likes INTEGER, ' +
  'views INTEGER, ' +
  'thread_key STRING, ' +
  'title STRING, ' +
  'url STRING )';

export const postSchema = 'post (' +
  'post_id INTEGER PRIMARY KEY, ' +
  'thread_id INTEGER, ' +
  'message STRING, ' +
  'site_id STRING, ' +
  'created_at STRING, ' +
  'updated_at STRING, ' +
  'likes INTEGER, ' +
  'ip STRING, ' +
  'parents STRING, ' +
  'author_id INTEGER, ' +
  'author_email STRING, ' +
  'author_url STRING )';
