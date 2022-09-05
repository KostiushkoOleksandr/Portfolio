import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {ChromePicker} from 'react-color';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '10px',
    marginTop: '10px',
  },
  picker: {}
});


class MyColorPicker extends Component {
  state = {
    rgb: {
      r: '255',
      g: '255',
      b: '255',
    }
  };

  handleChangeComplete = (color, event) => {
    this.setState({ rgb: {r: color.rgb.r, g: color.rgb.g, b: color.rgb.b}});
    this.props.getColor({r: color.rgb.r, g: color.rgb.g, b: color.rgb.b});
  };


  render() {
    const {classes, optionName} = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="column" spacing={24} alignItems={`center`} justify={`center`}>
          <Grid item xs>
            <Typography type="title">
              Choose a custom {optionName} color
            </Typography>
          </Grid>
          <Grid item xs>
            <ChromePicker color={this.state.rgb} onChangeComplete={ this.handleChangeComplete } disableAlpha={true}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

MyColorPicker.propTypes = {
  getColor: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  optionName: PropTypes.string.isRequired,
};

export default withStyles(styles, {withTheme: true})(MyColorPicker);