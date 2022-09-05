import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageFilter from 'react-image-filter';
import Zoom from 'react-reveal/Zoom';

class BaseDisplay extends Component {

  render() {
    let {bases, modColor} = this.props;
    return (
      <div className="boat_builder_wrapper"
           style={{maxWidth: '100%', textAlign: 'center', overflow: 'hidden', position: 'relative', marginTop: '10px'}}>
        <div className="" style={{maxWidth: '100%', width: '100%'}}>
          <Zoom>
            <div id="boat_builder_profile_holder"
                 style={{position: 'relative', maxWidth: '100%', height: '100%', maxHeight: '400px'}}>
              <img alt="builder" src={require(`./images/builder/r160/blank.png`)} style={{width: '100%'}}/>
              <img alt="builder" id="boat_builder_profile_image-282"
                   className="boat_builder_hull boat_builder_profile_image"
                   src={require(`${bases['1']}`)}
                   style={{display: 'block', position: 'absolute', top: '0px', left: '0px', maxWidth: '100%'}}/>
              <ImageFilter id="boat_builder_profile_image-282"
                           className="boat_builder_hull boat_builder_profile_image"
                           image={require(`${bases['2']}`)}
                           filter={[
                             modColor.r / 255, 0, 0, 0, 0,
                             0, modColor.g / 255, 0, 0, 0,
                             0, 0, modColor.b / 255, 0, 0,
                             0, 0, 0, 1, 0,
                           ]}
                           style={{display: 'block', position: 'absolute', top: '0px', left: '0px', maxWidth: '100%'}}/>
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

BaseDisplay.propTypes = {
  bases: PropTypes.object.isRequired,
  modColor: PropTypes.object,
};

export default BaseDisplay;