/**
 * User.js
 *
 * @description :: User model for persistance
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    name: 'STRING',    // Identifies people on the site
    username: {type: 'email', unique: true },
    password: {type: 'string', required: true},
    // User's profile photo
    // If photoId is not null, the URL to the file is /file/get/:id
    photoId: 'INTEGER',
    // If photoUrl is not null, then an external provider gave us the photo
    // Use the URL directly as the resource identifier for the photo.
    photoUrl: 'STRING',
    // User metadata for service delivery
    isAdmin: {
      type: 'BOOLEAN',
      defaultsTo: false
    },
    // is the user's login disabled
    disabled: {
      type: 'BOOLEAN',
      defaultsTo: false
    },
    wishlist: {
      collection: 'advertisement',
      via: 'wishlistedBy',
      dominant: true
    },
    advertisementlist: {
      collection: 'advertisement',
      via: 'advertisementlistedBy',
      dominant: true
    }
  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          user.password = hash;
          cb(null, user);
        }
      });
    });
  }
};
