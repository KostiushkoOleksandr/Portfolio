import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Nav from './Nav';
import Landing from './Landing';
import Footer from './Footer';
import Projects from './Projects';
import Builder from '../builder/BuilderRoot'

const options = {
  boatName: 'S550 Sport',
  bases: {
    1: {
      1: `./images/builder/streamline/full_boat.png`,
      2: `./images/builder/streamline/MAIN_HULL.png`,
    },
    2: {
      1: `./images/builder/streamline/Interior_main_layer.png`,
      2: `./images/builder/streamline/Interior_color_layer.png`,
    }
  },
  power: {
    thumbnails: false,
    items: [
      {
        name: '500HP',
        price: 8000,
      },
      {
        name:'725HP',
        price: 15000,
      }
    ]
  },
  packages: {
    thumbnails: false,
    items: [
      {
        name: 'Red Accents',
        price: 7500,
      },
    ]
  },
  cockpit: {
    thumbnails: false,
    items: [
      {
        name: 'Extra gages',
        price: 1300,
      },
    ]
  },
  tower: {
    thumbnails: false,
    items: [
      {
        name: 'Fishing Tower',
        price: 3000,
      },
      {
        name: 'Speakers',
        price: 9000,
      },
    ]
  },
  hullPrice: 5000,
  intPrice: 5000,
};

const routes = [
  {
    path: '/',
    navbar: () => <Nav/>,
    footer: () => <Footer/>
  },
  {
    path: '/',
    exact: true,
    main: () => <Landing/>
  },
  {
    path: '/projects',
    exact: true,
    main: () => <Projects/>
  },
  {
    path: '/projects/boat_builder',
    exact: true,
    main: () => <Builder options={options}/>
  },
];

class Routes extends Component {
  render() {
    return (
      <Grid container alignItems={`center`} justify={`center`} spacing={24}>
        <Grid item xs={12}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.navbar}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.main}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={route.footer}
            />
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Routes;