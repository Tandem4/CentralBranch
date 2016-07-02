import React, { Component } from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';


class PolylineSVG extends Component {
  render() {
    return (
      <Svg 
        height= "100"
        width= "100" >

      <Path
        d="M 25 10 L 98 65 L 70 25 "
        fill="none"
        strokeWidth="8"
        stroke="red" />

      </Svg>
    )
  }
}

export default PolylineSVG;