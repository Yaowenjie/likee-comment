import {findThreadByKey} from '../../service/threadService';
import {findPostsByThreadId} from '../../service/postService';

module.exports = (req, res) => {
  const threadKey = req.param('thread_key');
  const thread = findThreadByKey(threadKey);
  if (thread && thread.thread_id) {
    const posts = findPostsByThreadId(Number(thread.thread_id));
    thread.post = posts;
  }

  res.send(thread || 'There is no valid thread!');
};