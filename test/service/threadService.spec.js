import {saveThread} from '../../src/service/threadService';
import {db} from '../../src/util/sqlite';
import {expect} from 'chai';
import sinon from 'sinon';

describe('threadService', () => {
  describe('#saveThread', () => {
    let stub;
    const thread = {
      'site_id': '1290665',
      'thread_id': '6295207496181089026',
      'created_at': '2016-06-12T15:40:13+08:00',
      'updated_at': '2016-06-12T15:40:13+08:00',
      'likes': 0,
      'views': 0,
      'thread_key': '\u4ece\u5934\u5199\u4e00\u4e2aCucumber\u6d4b\u8bd5(\u4e00) Selenium',
      'title': '\u4ece\u5934\u5199\u4e00\u4e2aCucumber\u6d4b\u8bd5(\u4e00) Selenium',
      'url': 'http:\/\/\/%E7%BC%96%E7%A8%8B%E7%9B%B8%E5%85%B3\/cucumber-test',
      'author_key': '',
      'author_id': 0
    };

    beforeEach(() => {
      stub = sinon.stub(db, 'prepare');
    });

    afterEach(() => {
      db.prepare.restore();
    });

    it('should save thread unsuccessful with status and error message when error happens', () => {
      const fakedError = new Error('testing error');
      stub.withArgs('insert into thread values(?, ?, ?, ?, ?, ?, ?, ?, ?);').throws(fakedError);

      expect(saveThread(thread)).to.eql({'status': 'failed', 'error': fakedError.message});
    });
  });
});