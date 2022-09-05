import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import SummaryDialog from './SummaryDialog';

const styles = theme => (
  {paper: {
    padding: theme.spacing.unit,
  },
  popover: {
    pointerEvents: 'none',
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

class ImgToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      anchorEl: null,
      pov: 1,
    };
  }

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.target });
  };

  handlePovChange = pov => {
    this.setState({pov});
    this.props.changePov(pov);
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, optionsChosen } = this.props;
    const { anchorEl } = this.state;
    const open = !!anchorEl;

    return (
      <div>
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePopoverClose}
        >
          <Typography>Rotate View</Typography>
        </Popover>
      <Toolbar disableGutters>
        <Grid container alignItems={`center`} justify={`center`} spacing={24}>
          <Grid item sm={2}>
            <IconButton
              onTouchTap={() => {
                this.state.pov === 1 ? this.handlePovChange(2) : this.handlePovChange(1)}
              }
              onMouseOver={this.handlePopoverOpen}
              onMouseOut={this.handlePopoverClose}
            >
              <ArrowBackIcon/>
            </IconButton>
          </Grid>
          <Grid item sm={2}>
            <IconButton
              onTouchTap={() => {
                this.state.pov === 1 ? this.handlePovChange(2) : this.handlePovChange(1)}
              }
              onMouseOver={this.handlePopoverOpen}
              onMouseOut={this.handlePopoverClose}
            >
              <ArrowForwardIcon/>
            </IconButton>
          </Grid>
          <Grid item sm={2}>
            <SummaryDialog buttonName='Save' buttonType='raised' buttonColor='default' acceptAction={() => console.log(optionsChosen)} optionsChosen={optionsChosen}/>
          </Grid>
          <Grid item sm={4}>
            <SummaryDialog buttonName='Finish & Purchase' buttonType='raised' buttonColor='primary' acceptAction={() => console.log(optionsChosen)} optionsChosen={optionsChosen}/>
          </Grid>
        </Grid>
      </Toolbar>
      </div>
    );
  }
}

ImgToolbar.propTypes = {
  changePov: PropTypes.func.isRequired,
  optionsChosen: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgToolbar);