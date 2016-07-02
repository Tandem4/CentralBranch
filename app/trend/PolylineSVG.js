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
    let y2= "50";
    let y3= "20";

    let dataPoints1 = `20,${y1} 40,${y2} 60,${y3}`;
    let dataPoints2 = "20,40 40,50 60,20";


    return (
      <Svg 
        height= "60"
        width= "80" >

      <Polyline
        points={dataPoints1}
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