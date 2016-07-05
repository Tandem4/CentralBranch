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
    let y1= "40";
    let y2= "20";
    let y3= "30";

    let dataPoints = `10,40 20,${y1} 30,${y2} 40,${y3}`;
    
    return (
      <Svg 
        height= "60"
        width= "50" >

      <Polyline
        points={dataPoints}
        stroke="#fff"
        strokeWidth="4" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      </Svg>
    )
  }
}

export default PolylineSVG;