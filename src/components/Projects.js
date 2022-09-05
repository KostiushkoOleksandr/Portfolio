import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import RecentWork from './RecentWork';
import Button from 'material-ui/Button';
import Slide from 'react-reveal/Slide';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container spacing={24} alignItems='center' justify='center' alignContent='center' direction="column">
        <Grid item>
          <Slide left>
            <Typography type="display2" gutterBottom>
              Projects
            </Typography>
          </Slide>
        </Grid>
        <Grid item>
          <Slide left>
            <RecentWork/>
          </Slide>
        </Grid>
        <Grid item>
          <Slide left>
            <Typography type="headline" align="center">
            </Typography>
          </Slide>
        </Grid>
        <Grid item>
          <Slide left>
            <Button href="https://github.com/KostiushkoOleksandr" color="primary" raised>
              Гіт Хаб
            </Button>
          </Slide>
        </Grid>
      </Grid>
    );
  }
}

export default Projects;