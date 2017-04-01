/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var AdvertisementActions = require('../../actions/AdvertisementActions');

var Footer = React.createClass({

  propTypes: {
    allTodos: ReactPropTypes.object.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    var allTodos, total;

    allTodos = this.props.allTodos;
    total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    return (
      <footer id="footer">
      </footer>
    );
  }

});

module.exports = Footer;
