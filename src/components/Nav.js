import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
// import CloudQueue from 'material-ui-icons/CloudQueue';
import {withRouter} from 'react-router-dom';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    width: '100%'
  },
  typography: {
    flex: 1,
  },
  // CloudQueue: {
  //   marginLeft: -5,
  //   marginRight: 20,
  // }
});

class Nav extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Hidden mdUp>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon/>
              </IconButton>
              <Typography onTouchTap={() => this.props.history.push('/')} type="title" color="inherit"
                          className={classes.typography}>
                Олександр Костюшко
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.open} onClose={() => this.handleDrawerClose()}>
            <div
              tabIndex={0}
              role="button"
              onClick={() => this.handleDrawerClose()}
              onKeyDown={() => this.handleDrawerClose()}
            >
              <List>
                <ListItem>
                  <Button onTouchTap={() => this.props.history.push('/')} color="inherit">Головна</Button>
                </ListItem>
                <Divider/>
                <ListItem>
                  <Button onTouchTap={() => this.props.history.push('/projects')} color="inherit">Роботи</Button>
                </ListItem>
                <Divider/>
                <ListItem>
                  <Button href="https://github.com/zjacek12" color="inherit">Github</Button>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <AppBar position="static">
            <Toolbar>
              {/* <CloudQueue className={classes.CloudQueue}/> */}
              <Typography onTouchTap={() => this.props.history.push('/')} type="title" color="inherit"
                          className={classes.typography}>
                Олександр Костюшко
              </Typography>
              <Button onTouchTap={() => this.props.history.push('/')} color="inherit">Головна</Button>
              <Button href="https://github.com/KostiushkoOleksandr" color="inherit">Гіт Хаб</Button>
            </Toolbar>
          </AppBar>
        </Hidden>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(Nav));