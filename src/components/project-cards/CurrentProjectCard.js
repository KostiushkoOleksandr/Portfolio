import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import {withRouter} from 'react-router-dom';

const styles = {
  card: {
    // maxWidth: 500,
    // width: '100%'
  },
};

function ProjectCard(props) {
  const {classes} = props;
  return (
    <Grid container spacing={24} alignContent='center' alignItems='center' justify='center'>
      <Grid item xs={7}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="headline" component="h2">
            IT HUB React.js Developer (Work experience internship)
            </Typography>
            <Typography component="p">
            31.01.2022–25.02.2022<br/>
            Worked as a front-end programmer, the main task was the development of new blocks and the layout of new pages.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={7}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="headline" component="h2">
            IT HUB Full Stack Developer (Work experience internship)
            </Typography>
            <Typography component="p">
            06.02.2023–06.03.2023<br/>
            Development of a cloud service for organized data storage.
            </Typography>
          </CardContent>
        </Card>
    </Grid>

      <Grid item xs={7}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="headline" component="h2">
            Department of Education (Front-end Developer)
            </Typography>
            <Typography component="p">
            18.02.2023–Now<br/>
            Front-end Developer.Development of a system for internal document management.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ProjectCard));
