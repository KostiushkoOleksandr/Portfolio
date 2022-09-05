import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import TagFacesIcon from 'material-ui-icons/TagFaces';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class Skills extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'JavaScript' },
      { key: 1, label: 'NodeJS' },
      { key: 2, label: 'ReactJS' },
      { key: 3, label: 'MongoDB' },
      { key: 4, label: 'HTML5' },
      { key: 5, label: 'Git' },
      { key: 6, label: 'Express' },
      { key: 7, label: 'CSS' },
      { key: 8, label: 'Communication' },

    ],
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          let avatar = null;

          if (data.label === 'React') {
            avatar = (
              <Avatar>
                <TagFacesIcon className={classes.svgIcon} />
              </Avatar>
            );
          }

          return (
            <Chip
              key={data.key}
              avatar={avatar}
              label={data.label}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);