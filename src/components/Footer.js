import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  footer: {
    marginLeft: '12px',
    marginRight: '12px',
  },
  Typography: {
    color: '#FAFAFA'
  }
});


class Footer extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <footer className={classes.footer}>
          <Grid container direction="row">
            <Grid item xs={4}>
              <Grid container direction="column">
                <Grid item>
                  {/* <Typography type='display1' className={classes.Typography}>
                    Alex Kost
                  </Typography> */}

                {/* </Grid>
                <Grid item>
                  <Typography paragraph className={classes.Typography}>
                  Я розробник зовнішнього програмного забезпечення.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography paragraph className={classes.Typography}>
                  Цей веб-сайт створено за допомогою компонентів React.js + Material-UI.
                  </Typography>
                  {/* <a href=" ">Source Code</a> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}/>
            <Grid item xs={3}>
              <Grid container direction="column">
                {/* <Grid item>
                  <Typography type="headline" className={classes.Typography}>
                  Соцмережі
                  </Typography>
                </Grid> */}
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
                <Grid item>
                  <Typography type="headline" className={classes.Typography}>
                    Контакти
                  </Typography>
                </Grid>
                <Grid item>
                  <a href="Oleksandr.Kostiushko@oa.edu.ua" className={classes.Typography}>
                  Oleksandr.Kostiushko.oa.edu.ua
                  </a>
                </Grid>
                <Grid item>
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(Footer);