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
            IT HUB React.js developer
            </Typography>
            <Typography component="p">
            31.01.2022–25.02.2022<br/>
             Роботу над проектом проводив на посаді front-end програміст, основною 
             задачею було розробка нових блоків та верстка нових сторінок.
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