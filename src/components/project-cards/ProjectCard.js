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
      <Grid item xs={6}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="headline" component="h2">
            Національний університет «Острозька академія»
            </Typography>
            <Typography component="p">
            2019 – 2023<br/>
            Економічний факультет, спеціальність «Комп’ютерні науки»
            </Typography>
            <Typography component="p">
            Фундаментальна підготовка фахівців у галузі   інформаційних технологій, 
            що здатні розв’язувати складні спеціалізовані задачі та розробляти і тестувати 
            високорівневі програмні продукти.
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