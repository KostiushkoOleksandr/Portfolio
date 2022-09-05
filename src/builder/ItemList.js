import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Typography from 'material-ui/Typography';
import Fade from 'react-reveal/Fade';

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    maxHeight: 400,
    overflowY: 'scroll',
  },
});

class ItemList extends React.Component {
  state = {
    checked: [0],
  };


  handleToggle = value => () => {
    this.setState({
      checked: [value],
    });
    this.props.getSelected(value);
  };

  render() {
    const {classes, items, thumbnails} = this.props;

    return (
      <div className={classes.root}>
        <List component='div'>
          {items.map((item, index) => (
            <Fade left key={`${index}-fade`}>
              <ListItem
                key={index}
                dense
                component='div'
                onClick={this.handleToggle(index)}
                className={classes.listItem}
              >
                <Checkbox
                  checked={this.state.checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple={true}
                />

                <ListItemText disableTypography={true} primary={
                  <div>
                    {thumbnails ? <img src={require(`${item.thumb}`)}
                                       alt=""
                                       className="z-depth-2 left"/> : ''}
                    <Typography align='center' variant='button'>{item.name}</Typography></div>}/>
              </ListItem>
            </Fade>
          ))}
        </List>
      </div>
    );
  }
}

ItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  getSelected: PropTypes.func,
  thumbnails: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ItemList);