/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var React, AdvertisementActions, TodoTextInput, Navbar, FormGroup, Bootstrap, Header, FormControl, AdvertisementModal;

React = require('react');
AdvertisementActions = require('../../actions/AdvertisementActions');
AdvertisementModal = require('../organisms/AdvertisementModal');
Bootstrap = require('react-bootstrap');

Navbar = Bootstrap.Navbar;
FormGroup = Bootstrap.FormGroup;
FormControl = Bootstrap.FormControl;
Button = Bootstrap.Button;

Header = React.createClass({
  /**
   * @return {object}
   */
  render: function () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
          <Navbar.Form pullRight>
            <AdvertisementModal glyph='edit' btnTitle='Advertisement'></AdvertisementModal>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Header;
