var React, ReactPropTypes, Bootstrap, Form, FormGroup, ControlLabel, FormControl, HelpBlock;

React = require('react');
ReactPropTypes = React.PropTypes;
Bootstrap = require('react-bootstrap');
Form = Bootstrap.Form;
FormGroup = Bootstrap.FormGroup;
FormControl = Bootstrap.FormControl;
ControlLabel = Bootstrap.ControlLabel;
HelpBlock = Bootstrap.HelpBlock;

const MAXLEN = 256;

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

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  getCountCharactersLeft() {
    return MAXLEN - this.state.value.length;
  },

  /**
   * @return {object}
   */
  render: function() /*object*/ {
    return (
      <FormGroup controlId={this.props.id} validationState='success'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl componentClass="textarea" placeholder={this.props.placeholder} value={this.props.value} onChange={this._onChange} maxLength={MAXLEN}/>
        <FormControl.Feedback />
        <HelpBlock>{this.getCountCharactersLeft()} characters left</HelpBlock>
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
