import {saveThread} from '../../src/service/threadService';
import {db} from '../../src/util/sqlite';
import {expect} from 'chai';
import sinon from 'sinon';

describe('threadService', () => {
  describe('#saveThread', () => {
    let stub;
    const thread = {
      'id': 6266750315286815762,
      'created_at': '2016-03-27T23:11:49+08:00',
      'likes': 3,
      'title': '哈哈',
      'url': 'http:\/\/\u8bf7\u66ff\u6362\u6210\u6587\u7ae0\u7684\u7f51\u5740',
      'key': '\u8bf7\u5c06\u6b64\u5904\u66ff\u6362\u6210\u6587\u7ae0\u5728\u4f60\u7684\u7ad9\u70b9\u4e2d\u7684ID',
      'site_id': 12323
    };

    beforeEach(() => {
      stub = sinon.stub(db, 'prepare');
    });

    afterEach(() => {
      db.prepare.restore();
    });

    it('should save thread unsuccessful with status and error message when error happens', () => {
      const fakedError = new Error('testing error');
      stub.withArgs('insert into thread values(?, ?, ?, ?, ?, ?, ?);').throws(fakedError);

      expect(saveThread(thread)).to.eql({'status': 'failed', 'error': fakedError.message});
    });
  });
});