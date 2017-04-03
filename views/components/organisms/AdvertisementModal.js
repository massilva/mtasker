/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var React, ReactPropTypes, Modal, Glyphicon, AdvertisementTitleInput, AdvertisementShortDesc, Bootstrap, Row, Col, CategoryNameInput;

React = require('react');
Bootstrap = require('react-bootstrap');
ReactPropTypes = React.PropTypes;
Modal = Bootstrap.Modal;
Glyphicon = Bootstrap.Glyphicon;

AdvertisementTitleInput = require('../atoms/advertisement/TitleInput');
AdvertisementShortDesc = require('../atoms/advertisement/ShortDescriptionInput');
AdvertisementPriceInput = require('../atoms/advertisement/PriceInput');
AdvertisementPeriodInput = require('../atoms/advertisement/PeriodInput');
CategoryNameInput = require('../atoms/category/nameInput');

Bootstrap = require('react-bootstrap');
Row = Bootstrap.Row;
Col = Bootstrap.Col;

const AdvertisementModal = React.createClass({
  propTypes: {
    glyph: ReactPropTypes.string,
    btnTitle: ReactPropTypes.string,
  },

  getInitialState: function () {
    return {title: '', price: 0, isLoading: false, showModal: false };
  },

  close: function () {
    this.setState({ showModal: false });
  },

  open: function () {
    this.setState({ showModal: true });
  },

  _onSubmit(event) {
    this.setState({ isLoading: true });
    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({ isLoading: false });
      console.log(this.state, this.props);
    }, 2000);
    event.preventDefault();
  },

  _onChange(e) {
    var pair = {}, target = e.target;
    pair[target.id] = target.value;
    this.setState(pair);
  },

  /**
   * @return {object}
   */
  render: function() {
    var isLoading = this.state.isLoading;
    return (
      <div>
        <Button onClick={this.open}><Glyphicon glyph={this.props.glyph} /> {this.props.btnTitle}</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <form onChange={this._onChange} onSubmit={this._onSubmit}>
            <Modal.Header closeButton>
               <Modal.Title>New Advertisement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AdvertisementTitleInput id="title" label="Title" toValidationState={true} placeholder="Funny thing"></AdvertisementTitleInput>
              <AdvertisementShortDesc id="shortDescription" label="Short Description" placeholder="It's a good thing to help you..."></AdvertisementShortDesc>
              <Row>
                <Col xs={12} md={4}>
                  <AdvertisementPriceInput id="price" label="Price" toValidationState={true} placeholder="1.99"></AdvertisementPriceInput>
                </Col>
                <Col xs={12} md={4}>
                  <AdvertisementPeriodInput id="period" label="Period" toValidationState={true}></AdvertisementPeriodInput>
                </Col>
              </Row>
              <CategoryNameInput id="category" label="Category" toValidationState={true}></CategoryNameInput>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit"
                 bsStyle="success"
                 disabled={isLoading}>
                 {isLoading ? 'Saving...' : 'Save'}
               </Button>
               <Button bsStyle="danger" onClick={this.close}>Close</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }

});

module.exports = AdvertisementModal;
