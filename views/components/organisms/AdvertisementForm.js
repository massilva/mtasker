var React, ReactPropTypes, AdvertisementTitleInput, AdvertisementShortDesc, Bootstrap, Row, Col, CategoryNameInput;

React = require('react');
ReactPropTypes = React.PropTypes;
AdvertisementTitleInput = require('../atoms/advertisement/TitleInput');
AdvertisementShortDesc = require('../atoms/advertisement/ShortDescriptionInput');
AdvertisementPriceInput = require('../atoms/advertisement/PriceInput');
AdvertisementPeriodInput = require('../atoms/advertisement/PeriodInput');
CategoryNameInput = require('../atoms/category/nameInput');

Bootstrap = require('react-bootstrap');
Row = Bootstrap.Row;
Col = Bootstrap.Col;

const AdvertisementForm = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },
  // var data = {
  //   title:
  //   shortDescription:
  //   price:
  //   period:
  //   category:
  //   posted:
  // }
  render() {
    return (
      <form>
        <AdvertisementTitleInput id="title" label="Title" toValidationState={true} placeholder="Funny thing"></AdvertisementTitleInput>
        <AdvertisementShortDesc id="shortDescription" label="Short Description" placeholder="It's a good thing to help you..."></AdvertisementShortDesc>
        <Row>
          <Col xs={12} md={4}>
            <AdvertisementPriceInput id="price" label="Price" toValidationState={true} placeholder="1.99" value="0.00"></AdvertisementPriceInput>
          </Col>
          <Col xs={12} md={4}>
            <AdvertisementPeriodInput id="period" label="Period" toValidationState={true}></AdvertisementPeriodInput>
          </Col>
        </Row>
        <CategoryNameInput id="category" label="Category" toValidationState={true}></CategoryNameInput>
      </form>
    );
  }
});

module.exports = AdvertisementForm;
