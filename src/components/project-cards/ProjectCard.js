import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

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
            National University "Ostroh Academy"
            </Typography>
            <Typography component="p">
            2019 – 2023<br/>
            Faculty of Economics, "Computer Science" specialty
            </Typography>
            <Typography component="p">
            Fundamental training of specialists in the field of information technologies,
             capable of solving complex specialized tasks and developing and testing
             high-level software products.
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

export default withStyles(styles)(ProjectCard);