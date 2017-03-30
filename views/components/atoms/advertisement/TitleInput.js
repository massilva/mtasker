var React, ReactPropTypes, Bootstrap, Form, FormGroup, ControlLabel, FormControl, HelpBlock;

React = require('react');
ReactPropTypes = React.PropTypes;
Bootstrap = require('react-bootstrap');
Form = Bootstrap.Form;
FormGroup = Bootstrap.FormGroup;
FormControl = Bootstrap.FormControl;
ControlLabel = Bootstrap.ControlLabel;
HelpBlock = Bootstrap.HelpBlock;

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
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
    }
    return null;
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <FormGroup controlId={this.props.id} validationState={this.getValidationState(this.props.toValidationState)}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl type='text' placeholder={this.props.placeholder} value={this.props.value} onChange={this._onChange}/>
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
