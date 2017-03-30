/**
 * Advertisement.js
 *
 * @description ::  Advertisement model for persistance
 */

module.exports = {
  attributes: {
    'title': {
      type: 'string'
    },
    shortDescription: {
      type: 'text'
    },
    price: {
      type: 'float'
    },
    period: {
      type: 'string',
      enum: ['daily', 'weekly', 'monthly', 'quarterly', 'semesterly', 'annual'],
      defaultsTo: 'weekly'
    },
    wishlistedBy: {
      collection: 'user',
      via: 'wishlist'
    },
    advertisementlistedBy: {
      collection: 'user',
      via: 'advertisementlist'
    },
    category: {
      model: 'category'
    },
    posted: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
