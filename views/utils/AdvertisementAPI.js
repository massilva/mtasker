(function () {
  /**
   * AdvertisementAPI
   *
   * @description :: Create CRUD actions to manage async data before action handlers
   */
  'use strict';
  var AppDispatcher, $;

  AppDispatcher = require('../dispatcher/AppDispatcher');
  $ = require('jquery');

  module.exports = {
    /**
     * Creates a advertisement on the server then dispatches change
     */
    createAdvertisement: function(data, callback) {
      $.ajax({
        url: '/Advertisement',
        type: 'POST',
        data: data
      }).done(function (msg) {
        callback(msg);
      });
    },
    /**
     * Returns advertisements to hydrate store
     */
    readAdvertisements: function(callback) {
      $.ajax({
        url: '/Advertisement',
        type: 'GET',
        dataType: 'json'
      }).done(function (data) {
        callback(data);
      });
    },
    /**
     * Destroys advertisement on server then dispatches change to stores
     */
    sailsDestroy: function (id, callback) {
      $.ajax({
        url: '/Advertisement/' + id,
        type: 'DELETE'
      }).done(function () {
        callback();
      });
    }
  };
}());
