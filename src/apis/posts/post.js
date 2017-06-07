import {savePost} from '../../service/postService';

module.exports = (req, res) => {
  const post = req.body;
  res.send(savePost(post));
};