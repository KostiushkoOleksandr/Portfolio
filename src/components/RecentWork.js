import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';
import ProjectCard from './project-cards/ProjectCard';
import CurrentProjectCard from './project-cards/CurrentProjectCard';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '100px'
  }
});

class RecentWork extends Component {
  render() {
    return (
      <Grid container alignItems='center' spacing={24} alignContent='center' justify='center' direction='row'>
        <Grid item xs={12}>
          <ProjectCard/>
        </Grid>
        <Grid item xs={12}>
          <CurrentProjectCard/>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles, {withTheme: true})(RecentWork));