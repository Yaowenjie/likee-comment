import {savePost} from '../../src/service/postService';
import {db} from '../../src/util/sqlite';
import {expect} from 'chai';
import sinon from 'sinon';

describe('threadService', () => {
  describe('#saveThread', () => {
    let stub;
    const post = {
      'post_id': '6266754641434772225',
      'thread_id': 6266750962442961666,
      'message': '\u563f\u563f\uff0c\u51ed\u611f\u89c9',
      'site_id': '1290665',
      'created_at': '2016-03-27T23:28:36+08:00',
      'updated_at': '1970-01-01T08:00:00+08:00',
      'likes': 0,
      'ip': '14.196.141.33',
      'parents': [
        6266754078215242497
      ],
      'author_id': 6266747902668833537,
      'author_email': null,
      'author_name': '\u7af9\u5f71\u6e05\u98ce',
      'author_url': null,
    };

    beforeEach(() => {
      stub = sinon.stub(db, 'prepare');
    });

    afterEach(() => {
      db.prepare.restore();
    });

    it('should save post unsuccessful with status and error message when error happens', () => {
      const fakedError = new Error('testing error');
      stub.withArgs('insert into post values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);').throws(fakedError);

      expect(savePost(post)).to.eql({'status': 'failed', 'error': fakedError.message});
    });
  });
});