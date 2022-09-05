import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import ItemList from './ItemList';
import ImgToolbar from './ImgToolbar';
import BaseDisplay from './BaseDisplay';
import MyColorPicker from './ColorPicker';
import Divider from 'material-ui/Divider';
import CategorySelect from './CategorySelect';
import Bounce from 'react-reveal/Bounce';

const styles = theme => ({
  root: {
    marginTop: '10px',
    width: '98%',
    height: '700px',
    minHeight: '700px',
    maxHeight: '700px',
    marginLeft: '10px',
  },
  parent: {
    overflow: 'hidden',
    width: '100%',
    height: '700px',
    minHeight: '700px',
    maxHeight: '700px',
    borderRight: '.5px solid lightgrey',

  },
  price: {},
  name: {},
  left: {},
  right: {},
});

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      pov: 1,
      exterior_color: {
        r: '255',
        g: '255',
        b: '255',
      },
      power: 0,
      interior_color: {
        r: '255',
        g: '255',
        b: '255',
      },
      packages: 0,
      cockpit: 0,
      tower: 0,
    };
  }

  getPowerOption = power => {
    this.setState({power});
  };
  getPackageOption = packages => {
    this.setState({packages});
  };
  getCockpitOption = cockpit => {
    this.setState({cockpit});
  };
  getTowerOption = tower => {
    this.setState({tower});
  };

  changePov = (pov) => {
    this.setState({pov});
  };

  changeExtColor = (color) => {
    this.setState({
      exterior_color: {
        r: color.r,
        g: color.g,
        b: color.b,
      },
    });
  };

  changeIntColor = (color) => {
    this.setState({
      interior_color: {
        r: color.r,
        g: color.g,
        b: color.b,
      },
    });
  };

  calcTotal = () => {
    const {power, packages, cockpit, tower, hullPrice, intPrice} = this.props.options;
    return power.items[this.state.power].price
      + packages.items[this.state.packages].price
      + cockpit.items[this.state.cockpit].price
      + tower.items[this.state.tower].price
      + hullPrice
      + intPrice;
  };

  render() {
    const {classes, options} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid container direction='row'>
            <Grid item xs={6} className={classes.parent}>
              <Grid container direction='column' className={classes.left}>
                <Grid item xs={12} className={classes.name}>
                  <Typography type="display2" align='center'>
                    {options.boatName}
                  </Typography>
                </Grid>
                <Divider/>
                <Grid item xs={12}>
                  <CategorySelect
                    changePov={(x) => {
                      if (x === 0) {
                        this.changePov(1);
                      } else if (x === 2) {
                        this.changePov(2);
                      }
                    }}
                    hulls={<MyColorPicker getColor={(x) => this.changeExtColor(x)} optionName={`hull`}/>}
                    power={<ItemList getSelected={(x) => this.getPowerOption(x)} items={options.power.items}
                                     thumbnails={options.power.thumbnails}/>}
                    interior={<MyColorPicker getColor={(x) => this.changeIntColor(x)} optionName={`interior`}/>}
                    packages={<ItemList getSelected={(x) => this.getPackageOption(x)} items={options.packages.items}
                                        thumbnails={options.packages.thumbnails}/>}
                    cockpit={<ItemList getSelected={(x) => this.getCockpitOption(x)} items={options.cockpit.items}
                                       thumbnails={options.cockpit.thumbnails}/>}
                    tower={<ItemList getSelected={(x) => this.getTowerOption(x)} items={options.tower.items}
                                     thumbnails={options.tower.thumbnails}/>}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} className={classes.right}>
              <Grid container direction='column'>
                <Grid item xs={12} className={classes.name}>
                  <Bounce spy={this.calcTotal()}>
                    <Typography type="display2" align='center'>
                      Price as Built: {this.calcTotal()}
                    </Typography>
                  </Bounce>
                </Grid>
                <Divider/>
                <Grid item xs={12}>
                  {this.state.pov === 1 ?
                    <BaseDisplay bases={options.bases['1']} modColor={this.state.exterior_color}/>
                    : ''
                  }
                  {this.state.pov === 2 ?
                    <BaseDisplay bases={options.bases['2']} modColor={this.state.interior_color}/>
                    : ''
                  }
                </Grid>
                <Grid item xs={12}>
                  <ImgToolbar optionsChosen={{
                    power: options.power.items[this.state.power],
                    packages: options.packages.items[this.state.packages],
                    cockpit: options.cockpit.items[this.state.cockpit],
                    tower: options.tower.items[this.state.tower],
                    exterior_color: this.state.exterior_color,
                    interior_color: this.state.interior_color,
                  }} changePov={(pov) => this.changePov(pov)}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Builder.propTypes = {
  boatName: PropTypes.string,
  classes: PropTypes.object,
  options: PropTypes.object.isRequired
};

export default withStyles(styles)(Builder);