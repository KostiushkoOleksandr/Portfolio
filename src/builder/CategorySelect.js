import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Fade from 'react-reveal/Fade';

function TabContainer(props) {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
      <Fade>
        {props.children}
      </Fade>
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit,
  },
});

class CategorySelect extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.props.changePov(value);
    this.setState({value});
  };

  render() {
    const {classes, hulls, power, interior, packages, cockpit, tower} = this.props;
    const {value} = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Exterior Color"/>
            <Tab label="Power"/>
            <Tab label="Interior Color"/>
            <Tab label="Packages"/>
            <Tab label="Cockpit"/>
            <Tab label="Tower"/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>{hulls}</TabContainer>}
        {value === 1 && <TabContainer>{power}</TabContainer>}
        {value === 2 && <TabContainer>{interior}</TabContainer>}
        {value === 3 && <TabContainer>{packages}</TabContainer>}
        {value === 4 && <TabContainer>{cockpit}</TabContainer>}
        {value === 5 && <TabContainer>{tower}</TabContainer>}
      </div>
    );
  }
}

CategorySelect.propTypes = {
  changePov: PropTypes.func,
  classes: PropTypes.object,
  hulls: PropTypes.object,
  power: PropTypes.object,
  interior: PropTypes.object,
  packages: PropTypes.object,
  cockpit: PropTypes.object,
  tower: PropTypes.object,
};

export default withStyles(styles)(CategorySelect);
