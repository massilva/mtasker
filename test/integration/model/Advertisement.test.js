var request = require('supertest'),
    assert = require('assert'),
    categories = require('../../fixtures/category'),
    advertisements = require('../../fixtures/advertisement');

describe('AdvertisementModel', () => {
  var agent;
  beforeEach(function(done) {
    createAttrs = (JSON.parse(JSON.stringify(advertisements.minAttrs)));
    expectedAttrs = (JSON.parse(JSON.stringify(advertisements.minAttrs)));
    category = (JSON.parse(JSON.stringify(categories.minAttrs)));
    agent = request.agent(sails.hooks.http.app);
    agent.post('/category')
      .send({
        name: category.name,
        json: true
      })
      .expect(201)
      .end(done);
  });
  describe('new Advertisement', () => {
    var newAdvertisement = {};
    beforeEach((done) => {
      createAttrs.category = category.id;
      Advertisement.create(createAttrs)
        .then((res) => {
          newAdvertisement = res;
          done();
        })
        .catch(done);
    });
    describe('#create', () => {
      it('should have title', (done) => {
        assert.equal(createAttrs.title, newAdvertisement.title);
        done();
      });
      it('should have short description', (done) => {
        assert.equal(createAttrs.shortDescription, newAdvertisement.shortDescription);
        done();
      });
      it('should have price', (done) => {
        assert.equal(createAttrs.price, newAdvertisement.price);
        done();
      });
      it('should have period', (done) => {
        assert.equal(Advertisement.attributes.period.defaultsTo, newAdvertisement.period);
        done();
      });
      it('should have category', (done) => {
        assert.equal(createAttrs.category, newAdvertisement.category);
        done();
      });
    });
  });
});
