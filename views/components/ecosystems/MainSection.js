/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var React, ReactPropTypes, AdvertisementActions, TodoItem, Bootstrap, Grid, Row, Col, MainSection;

React = require('react');
ReactPropTypes = React.PropTypes;
AdvertisementActions = require('../../actions/AdvertisementActions');
TodoItem = require('../organisms/TodoItem');

Bootstrap = require('react-bootstrap');
Grid = Bootstrap.Grid;
Row = Bootstrap.Row;
Col = Bootstrap.Col;

const CHUNK = 3;

MainSection = React.createClass({

  propTypes: {
    allTodos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    // This section should be hidden by default
    // and shown when there are todos.
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    var allTodos, todos, i, j, temparray, keys;

    allTodos = this.props.allTodos;
    todos = [];
    temparray = [];
    keys = Object.keys(allTodos);

    for (i = 0, j = keys.length; i < j; i += CHUNK) {
        temparray.push(keys.slice(i, i + CHUNK));
    }

    var grid, cols, aux, rows = [];
    for (i=0; i < temparray.length; i++) {
      aux = temparray[i];
      cols = [];
      for (j = 0; j < aux.length; j++) {
        cols.push(
          <Col key={i + "_" + aux[j]} xs={6} md={4}>
            <TodoItem key={i + "_" + aux[j]} todo={allTodos[aux[j]]} />
          </Col>
        )
      }
      rows.push(
        <Row key={i}>
          {cols}
        </Row>
      )
    }
    grid = (<Grid>{rows}</Grid>);
    return (
      <section id="main">
        <ul id="todo-list">{grid}</ul>
      </section>
    );
  },

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll: function() {
    AdvertisementActions.toggleCompleteAll();
  }

});

module.exports = MainSection;
