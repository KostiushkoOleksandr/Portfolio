import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Stepper, {Step, StepButton, StepContent} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Zoom from 'material-ui/transitions/Zoom';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '10px',
    marginLeft: '20px',
    height: '500px',
    minHeight: '500px',
    maxHeight: '500px',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Exterior Colors', 'Power', 'Interior Color', 'Packages', 'Cockpit', 'Tower',
    // 'Summary'
  ];
}

class HorizontalNonLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return this.props.hulls;
      case 1:
        return this.props.power;
      case 2:
        return this.props.interior;
      case 3:
        return this.props.packages;
      case 4:
        return this.props.cockpit;
      case 5:
        return this.props.tower;
      // case 6:
      //   return 'Price and packaged summary';
      default:
        return 'Unknown step';
    }
  };

  totalSteps = () => {
    return getSteps().length;
  };

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  handleNext = () => {
    let activeStep;

    if (this.isLastStep()) {
      activeStep = 0;
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    const {activeStep} = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  render() {
    const {classes, theme} = this.props;
    const steps = getSteps();
    const {activeStep} = this.state;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    return (
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepButton
                  onClick={this.handleStep(index)}
                >
                  {label}
                </StepButton>
                <Zoom
                  key={`${label}+${index}`}
                  in={this.state.activeStep === index}
                  timeout={transitionDuration}
                  style={{
                    transitionDelay: this.state.activeStep === index ? transitionDuration.exit : 0,
                  }}
                  unmountOnExit
                >
                  <StepContent>
                    <div>
                      {this.getStepContent(activeStep)}
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="raised"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Zoom>
              </Step>
            );
          })}
        </Stepper>
      </div>
    );
  }
}

HorizontalNonLinearStepper.propTypes = {
  classes: PropTypes.object,
  hulls: PropTypes.object,
  power: PropTypes.object,
  interior: PropTypes.object,
  packages: PropTypes.object,
  cockpit: PropTypes.object,
  tower: PropTypes.object,
};

export default withStyles(styles, {withTheme: true})(HorizontalNonLinearStepper);

