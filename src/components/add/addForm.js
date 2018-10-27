import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { withRouter, NavLink } from 'react-router-dom';

import ROUTE from '../../constants/route'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

class OutlinedInputAdornments extends React.Component {
  state = {
    name: '',
    picture: '',
    quantity: '',
    price: ''
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSave = () => event => {

    if (this.state.name === '' || this.state.quantity === '' || this.state.Price === ''){
      alert("No changes saved.");
      console.log("Leaving!");
    } else {
      alert("Details saved for " + this.state.name + ".");
      console.log("Save and Leave!");
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="outlined-adornment-item-name"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Item Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Item</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-adornment-picture"

          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Picture (optional)"
          value={this.state.picture}
          onChange={this.handleChange('picture')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Picture</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-adornment-price"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Price"
          value={this.state.price}
          onChange={this.handleChange('price')}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-adornment-quantity"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Quantity"
          value={this.state.quantity}
          onChange={this.handleChange('quantity')}
          InputProps={{
            startAdornment: <InputAdornment position="start">#</InputAdornment>,
          }}
        />
        <Button size="large" color="primary" onClick={this.handleSave(this.state)} component={NavLink} to={ROUTE.PATH.INVENTORY}>
          Save
        </Button>
      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedInputAdornments);