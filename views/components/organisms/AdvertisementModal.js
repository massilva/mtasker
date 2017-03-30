/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var React, ReactPropTypes, Modal, Bootstrap, Glyphicon, AdvertisementForm;

React = require('react');
Bootstrap = require('react-bootstrap');
ReactPropTypes = React.PropTypes;
Modal = Bootstrap.Modal;
Glyphicon = Bootstrap.Glyphicon;
AdvertisementForm = require('./AdvertisementForm');

const AdvertisementModal = React.createClass({
  propTypes: {
    glyph: ReactPropTypes.string,
    btnTitle: ReactPropTypes.string
  },

  getInitialState: function () {
    return { showModal: false };
  },

  close: function () {
    this.setState({ showModal: false });
  },

  open: function () {
    this.setState({ showModal: true });
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <Button onClick={this.open}><Glyphicon glyph={this.props.glyph} /> {this.props.btnTitle}</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
             <Modal.Title>New Advertisement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AdvertisementForm></AdvertisementForm>
          </Modal.Body>
          <Modal.Footer>
             <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

});

module.exports = AdvertisementModal;
