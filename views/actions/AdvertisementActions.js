/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AdvertisementActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var AdvertisementAPI = require('../utils/AdvertisementAPI');

var AdvertisementActions = {

  /**
   * @param  {string} text
   */
  create: function(data) {
    var data = {};
    //send to server and store
    AdvertisementAPI.createAdvertisement(data[id], function () {
      //dispatch to store
      AppDispatcher.dispatch({
        actionType: TodoConstants.TODO_CREATE,
        data: data[id]
      });
    });
  },
  /**
   * @param  {string} id
   */
  destroy: function(id) {
    //send to server and store
    AdvertisementAPI.sailsDestroy(id, function () {
      AppDispatcher.dispatch({
        actionType: TodoConstants.TODO_DESTROY,
        id: id
      });
    });
  },

  /**
   * Update store with server data, then use callback for store retrieval
   */
  hydrateStore: function () {
    AdvertisementAPI.readAdvertisements(function (data) {
      AppDispatcher.dispatch({
        actionType: TodoConstants.HYDRATE_STORE,
        data: data
      });
    });
  }

};

module.exports = AdvertisementActions;
