var React, ReactPropTypes, Bootstrap, Form, FormGroup, ControlLabel, FormControl, HelpBlock;

React = require('react');
ReactPropTypes = React.PropTypes;
Bootstrap = require('react-bootstrap');
Form = Bootstrap.Form;
FormGroup = Bootstrap.FormGroup;
FormControl = Bootstrap.FormControl;
ControlLabel = Bootstrap.ControlLabel;
HelpBlock = Bootstrap.HelpBlock;

const MINLEN = 4;
const MAXLEN = 32;

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
    if (isToValidateState) {
      const length = this.state.value.length;
      if (length >= MINLEN && length <= MAXLEN) return 'success';
      else if (length > 0) return 'error';
    }
    return null;
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <FormGroup controlId={this.props.id} validationState={this.getValidationState(this.props.toValidationState)}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl type='text' placeholder={this.props.placeholder} value={this.props.value} onChange={this._onChange} maxLength={MAXLEN}/>
        <FormControl.Feedback />
        <HelpBlock>Min: {MINLEN}, max: {MAXLEN} characters.</HelpBlock>
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
