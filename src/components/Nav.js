import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
import { withRouter } from 'react-router-dom';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
// import List, { ListItem } from 'material-ui/List';
// import Divider from 'material-ui/Divider';
import LaptopChromebookIcon from 'material-ui-icons/LaptopChromebook';
import './Nav.css';
import Grid from 'material-ui/Grid';


const styles = theme => ({
  root: {
    width: '100%'
  },
  typography: {
    flex: 1,
  },
  LaptopChromebookIcon: {
    marginLeft: 5,
    marginRight: 20,
  }
});

class Nav extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
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
                <MenuIcon />
              </IconButton>
              <Typography onTouchTap={() => this.props.history.push('/')} type="title" color="inherit"
                className={classes.typography}>
                Oleksandr Kostiushko
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
              <Grid item>
                <div className="footer-social-networks">
                  <a href="https://www.instagram.com/alexkost_/">
                    <i
                      className="fa fa-instagram footer-social-icons"
                      aria-hidden="true"
                    >
                      {' '}
                    </i>
                  </a>
                  <a href="https://www.linkedin.com/in/oleksandr-kostiushko-591677222/">
                    <i className="fa fa-linkedin-square footer-social-icons" aria-hidden="true">
                      {' '}
                    </i>
                  </a>
                  <a href="https://t.me/A1exKost">
                    <i className="fa fa-phone-square footer-social-icons" aria-hidden="true">
                      {' '}
                    </i>
                  </a>
                </div>
              </Grid>
            </div>
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <AppBar position="static">
            <Toolbar>
              <LaptopChromebookIcon className={classes.LaptopChromebookIcon} />
              <Typography onTouchTap={() => this.props.history.push('/')} type="title" color="inherit"
                className={classes.typography}>
                Oleksandr Kostiushko
              </Typography>
              <Grid item>
                <div className="footer-social-networks">
                  <a href="https://www.instagram.com/alexkost_/" target="_blank">
                    <i
                      className="fa fa-instagram footer-social-icons"
                      aria-hidden="true"
                    >
                      {' '}
                    </i>
                  </a>
                  <a href="https://www.linkedin.com/in/oleksandr-kostiushko-591677222/">
                    <i className="fa fa-linkedin-square footer-social-icons" aria-hidden="true">
                      {' '}
                    </i>
                  </a>
                  <a href="https://t.me/A1exKost">
                    <i className="fa fa-phone-square footer-social-icons" aria-hidden="true">
                      {' '}
                    </i>
                  </a>
                </div>
              </Grid>
              {/* <Button onTouchTap={() => this.props.history.push('/')} color="inherit">Головна</Button>
              <Button href="https://github.com/KostiushkoOleksandr" color="inherit">Гіт Хаб</Button> */}
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


export default withRouter(withStyles(styles, { withTheme: true })(Nav));
