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



class SentimentGraph extends Component {
  render() {
    let angerPin = "40";
    let disgustPin = "20";
    let fearPin = "30";
    let joyPin = "30";
    let sadnessPin = "30";

    // let dataPoints = `10,40 20,${y1} 30,${y2} 40,${y3}`;
    // "anger":99,"disgust":7,"fear":46,"joy":4,"sadness":5,
    return (
      <Svg 
        height= "60"
        width= "80" >

     {/* Grid Lines */}
      <Polyline
        points="20,22 20,38"
        stroke="#c8cbce"
        strokeWidth="3" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="40,22 40,38"
        stroke="#c8cbce"
        strokeWidth="3" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="60,22 60,38"
        stroke="#c8cbce"
        strokeWidth="3" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />
      
      {/* Anger Bar */}
      <Polyline
        points="5,30 75,30"
        stroke="#c5ccd3"
        strokeWidth="4" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

   
      {/* Anger Pin */}
      <Circle 
        cx="30" 
        cy="30" 
        r="8"
        fill="#fff"/>



      </Svg>
    )
  }
}

export default SentimentGraph;