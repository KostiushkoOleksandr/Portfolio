import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import PropTypes from 'prop-types';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SummaryDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAccept = () => {
    this.setState({ open: false });
    this.props.acceptAction();
  };

  render() {
    const {buttonName, buttonType, buttonColor, optionsChosen} = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen} color={buttonColor} variant={buttonType}>{buttonName}</Button>
        <Dialog
          open={this.state.open}
          transition={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Options Chosen"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <b>Power: </b>{optionsChosen.power.name}, ${optionsChosen.power.price}<br/>
              <b>Packages: </b>{optionsChosen.packages.name}, ${optionsChosen.packages.price}<br/>
              <b>Cockpit: </b>{optionsChosen.cockpit.name}, ${optionsChosen.cockpit.price}<br/>
              <b>Tower: </b>{optionsChosen.tower.name}, ${optionsChosen.tower.price}<br/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Return
            </Button>
            <Button onClick={this.handleAccept} color="primary">
              {buttonName}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SummaryDialog.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  optionsChosen: PropTypes.object.isRequired,
  acceptAction: PropTypes.func.isRequired,
};

export default SummaryDialog;