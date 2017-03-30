/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var React, ReactPropTypes, AdvertisementActions, classNames, TodoItem, Bootstrap, Thumbnail, Button;

React = require('react');
ReactPropTypes = React.PropTypes;
AdvertisementActions = require('../../actions/AdvertisementActions');

classNames = require('classnames');

Bootstrap = require('react-bootstrap');
Thumbnail = Bootstrap.Thumbnail;
Button = Bootstrap.Button;

TodoItem = React.createClass({

  propTypes: {
    todo: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  /**
   * @return {object}
   */
  render: function() {
    var todo = this.props.todo;
    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
      <Thumbnail src="images/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    );
  },

  _onToggleComplete: function() {
    AdvertisementActions.toggleComplete(this.props.todo);
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  _onSave: function(text) {
    AdvertisementActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },

  _onDestroyClick: function() {
    AdvertisementActions.destroy(this.props.todo.id);
  }

});

module.exports = TodoItem;
