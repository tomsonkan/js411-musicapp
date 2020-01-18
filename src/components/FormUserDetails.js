import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import Button from 'material-ui/Button';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-uis/Menu';
import '../App.css';

export class FormUserDetails extends Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
  
  render() {
  const { values, handleChange } = this.props;
  // this.props.values;

  return (
    <MuiThemeProvider>
      <React.Fragment>
      <AppBar title = "Please enter User Details"/>
      <TextField
        hintText = "Enter Username"
        floatingLabelText="Username"
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
      />
      <br/>
      <TextField
        hintText = "Enter Password"
        floatingLabelText="Password"
        onChange={handleChange('lastName')}
        defaultValue={values.lastName}
      />
      <br/>
      <RaisedButton
        label = "Submit"
        primary = {true}
        style={styles.button}
        onClick = {this.continue}
      />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
}

const styles = {
  button: {
    margin: 25
  }
}
export default FormUserDetails;