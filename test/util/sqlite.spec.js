import {db, initDB} from '../../src/util/sqlite';
import {threadSchema} from '../../src/constant/schema';
import {expect} from 'chai';
import sinon from 'sinon';

describe('sqlite', () => {
  describe('#initDB', () => {
    it('should get correct db', () => {
      expect(db).to.not.be.null;
      expect(db.name).to.equal('comment.db');
    });

    it('should call prepare for CREATE TABLE', () => {
      let spy = sinon.spy(db, 'prepare');
      spy.withArgs('CREATE TABLE IF NOT EXISTS ' + threadSchema);

      initDB();

      expect(spy.withArgs('CREATE TABLE IF NOT EXISTS ' + threadSchema).calledOnce).to.be.true;
      db.prepare.restore();
    });

    it('should work with CREATE TABLE', () => {
      let stmt = db.prepare('CREATE TABLE IF NOT EXISTS ' + threadSchema);
      let info = stmt.run();

      expect(info.changes).to.equal(0);
      expect(info.lastInsertROWID).to.equal(0);
    });
  });
});