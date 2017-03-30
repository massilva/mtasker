var React, ReactPropTypes, AdvertisementTitleInput, AdvertisementShortDesc;

React = require('react');
ReactPropTypes = React.PropTypes;
AdvertisementTitleInput = require('../atoms/advertisement/TitleInput')
AdvertisementShortDesc = require('../atoms/advertisement/ShortDescriptionInput')

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
      </form>
    );
  }
});

module.exports = AdvertisementForm;
