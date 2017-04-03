var React, ReactPropTypes, Bootstrap, Form, FormGroup, ControlLabel, FormControl, Button, Row, Col;

React = require('react');
ReactPropTypes = React.PropTypes;
Bootstrap = require('react-bootstrap');
Form = Bootstrap.Form;
FormGroup = Bootstrap.FormGroup;
FormControl = Bootstrap.FormControl;
ControlLabel = Bootstrap.ControlLabel;
Button = Bootstrap.Button;
Row = Bootstrap.Row;
Col = Bootstrap.Col;

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

  /**
   * @return {object}
   */
  render: function() {
    var options = [{'name': 'techno', id: '1'}].map(function (e) {
      return (
        <option key={e.id} value={e.id}>{e.name.replace(/\b\w/g, l => l.toUpperCase())}</option>
      );
    });
    return (
      <div>
        <Row>
          <Col xs={12}>
            <ControlLabel>{this.props.label}</ControlLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <FormGroup controlId={this.props.id} validationState={this.getValidationState(this.props.toValidationState)}>
              <FormControl componentClass="select">
                <option value="select">Select one...</option>
                {options}
              </FormControl>
              <FormControl.Feedback />
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <Button bsStyle="primary">+</Button>
          </Col>
        </Row>
      </div>
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
