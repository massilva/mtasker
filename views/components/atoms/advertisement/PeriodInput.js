var React, ReactPropTypes, Bootstrap, Form, FormGroup, ControlLabel, FormControl, HelpBlock, AdvertisementBO;

React = require('react');
ReactPropTypes = React.PropTypes;
Bootstrap = require('react-bootstrap');
Form = Bootstrap.Form;
FormGroup = Bootstrap.FormGroup;
FormControl = Bootstrap.FormControl;
ControlLabel = Bootstrap.ControlLabel;
HelpBlock = Bootstrap.HelpBlock;

AdvertisementBO = require('../../../../api/models/Advertisement');


const TitleInput = React.createClass({

  propTypes: {
    id: ReactPropTypes.string,
    label: ReactPropTypes.string,
    toValidationState: ReactPropTypes.bool,
    placeholder: ReactPropTypes.string,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  getValidationState(isToValidateState) {
    const value = this.state.value;
    if (isToValidateState && value.length) {
      if (value === 'select') return 'error';
      else return 'success';
    }
    return  null;
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  /**
   * @return {object}
   */
  render: function() {
    var options = AdvertisementBO.attributes.period.enum.map(function (e) {
      return (
        <option key={e} value={e}>{e.replace(/\b\w/g, l => l.toUpperCase())}</option>
      );
    });
    return (
      <FormGroup controlId={this.props.id} validationState={this.getValidationState(this.props.toValidationState)}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl componentClass="select" onChange={this._onChange}>
          <option value="select">Select one...</option>
          {options}
        </FormControl>
        <FormControl.Feedback />
        {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
      </FormGroup>
    );
  },

  /**
   * @param {object} event
   */
  _onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  }

});

module.exports = TitleInput;
