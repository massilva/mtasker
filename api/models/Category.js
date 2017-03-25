/**
 * Category.js
 *
 * @description :: Category model for persistance
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: false,
  attributes: {
    id: {type: 'integer', autoIncrement: true,  primaryKey: true},
    name: {type: 'string'},
    advertisements: {collection: 'advertisement', via: 'category'}
  }
};
