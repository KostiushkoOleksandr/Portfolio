import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import RecentWork from './RecentWork';
import Skills from './Skills';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './Landing.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '100px'
  },
  img: {
    maxWidth: '200px',
    width: '100%',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: theme.palette.primary.main
  }
});


class Landing extends Component {
  render() {
    const {classes} = this.props;
    return (
      
      <div className={classes.root}>
        <Grid container spacing={24} direction="column" justify="center" alignItems="center">
          <Fade>
            {/* <Grid item>
              <img src={require(`../assets/Alex.jpg`)} className={classes.img} alt="Oleksandr.Kostiushko"/>
            </Grid> */}
            <div className="img-wrapper">
            <img src={require(`../assets/sasha.jpg`)} alt="OleksandrKostiushko"/>
            </div>
          </Fade>
          <Grid item>
            <Slide left>
              <Typography>.
              </Typography>
              <Typography  align="center" type="display1" gutterBottom>
              Привіт, я розробник програмного забезпечення.
              </Typography>
            </Slide>
            <Slide left>
              <Typography align="center" type="subheading" gutterBottom>
              Розробник React.js з доведеним досвідом у розробці програмних продуктів.
              Завжди зосереджений на досягненні цілей та досягнення успіху в швидко розвиваючих та динамічних середовищах.
              </Typography>
              <Typography align="center" type="subheading" paragraph gutterBottom>Стек технологій з якими працюю: React.js,
                Node.js,
                Express і
                MongoDB.
              </Typography>
            </Slide>
            <br/>
            <br/>
            <Divider light/>
            <br/>
            <br/>
          </Grid>
          <Grid item>
            <Slide left>
              {/* <div className='hero'>
          <div className='static-txt'></div>
          <ul className='dynamic-txts'>
            <li><span>По всіх питаннях писати в</span></li>
            <li><span>Телеграм</span></li>
            <li><span>На пошту</span></li>
            <li><span>Та Work.ua</span></li>
          </ul>

        </div> */}
              <Typography type="display1" gutterBottom>
              Навчання/Досвід
              </Typography>
            </Slide>
          </Grid>
          <Grid item>
            <Slide left>
              <RecentWork/>
            </Slide>
            <br/>
            <br/>
            <Divider light/>
            <br/>
            <br/>
          </Grid>
          <Grid item>
            <Slide left>
              <Typography type="display1" gutterBottom>
                Навички
              </Typography>
            </Slide>
          </Grid>
          <Grid item>
            <Slide left>
              <Skills/>
            </Slide>
            <br/>
            <br/>
            <Divider light/>
            <br/>
            <br/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(Landing));
