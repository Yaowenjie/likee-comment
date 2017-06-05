import {saveThread} from '../../service/threadService';

module.exports = (req, res) => {
  const thread = req.body;
  res.send(saveThread(thread));
};