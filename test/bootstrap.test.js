var Sails = require('sails');
require('should');

// Global before hook
before(function (done) {
  // Lift Sails with test database
  Sails.lift({
    log: {
      level: 'error'
    },
    models: {
      connection: 'test',
      migrate: 'drop'
    }
  },
  function(err, sails) {
    if (err) return done(err);
    done(err, sails);
  });
});

beforeEach(function(done) {
  if ( sails.config.models.connection == 'postgresql') {
    console.log('note: using postgresql connection, not dropping test data');
  }
  // When we're using the memory database...
  // this will drop database between each test.
  // Also causes all models to be reloaded.
  sails.once('hook:orm:reloaded', done);
  sails.emit('hook:orm:reload');
});

// Global after hook
after(function (done) {
  console.log(); // Skip a line before displaying Sails lowering logs
  sails.lower(done);
});
