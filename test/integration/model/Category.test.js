var assert = require('assert'),
    categories = require('../../fixtures/category');

describe('CategoryModel', () => {
  beforeEach(function(done) {
    createAttrs = (JSON.parse(JSON.stringify(categories.allAttrs)));
    expectedAttrs = (JSON.parse(JSON.stringify(categories.allAttrs)));
    expectedAttrs.id = 1;
    done();
  });
  describe('new category', () => {
    var newCategory = {};
    beforeEach((done) => {
      Category.create(createAttrs)
        .then((res) => {
          newCategory = res;
          done();
        })
        .catch(done);
    });
    describe('#create', () => {
      it('should have name', (done) => {
        assert.equal(newCategory.name, expectedAttrs.name);
        done();
      });
      it('should have advertisement', (done) => {
        assert.equal(newCategory.advertisement, expectedAttrs.advertisement);
        done();
      });
    });
  });
  describe('#find()', () => {
    it('should not be empty', (done) => {
      Category.find((err, res) => {
        if (err) return done(err);
        res.should.not.be.eql(0);
        done();
      });
    });
  });
});
