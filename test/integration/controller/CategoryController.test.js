var request = require('supertest'),
    assert = require('assert'),
    categories = require('../../fixtures/category');

describe('CategoryController', function() {
  var agent;
  beforeEach(function(done) {
    createAttrs = (JSON.parse(JSON.stringify(categories.minAttrs)));
    expectedAttrs = (JSON.parse(JSON.stringify(categories.minAttrs)));
    agent = request.agent(sails.hooks.http.app);
    agent.post('/category')
      .send({
        name: createAttrs.name,
        json: true
      })
      .expect(201)
      .end(done)
  });
  describe('index', function() {
    it('should return success', (done) => {
      agent.get('/category')
        .expect(200, done);
    });
    it('should json return success', (done) => {
      agent.get('/category')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('should length json success', (done) => {
      agent.get('/category')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          res.body.length.should.be.above(0);
          done();
        });
    });
  });
});
