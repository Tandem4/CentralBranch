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





class EmotionGraph extends Component {
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
        width= "100" >

     {/* Grid Lines */}
      <Polyline
        points="10,15 10,45"
        stroke="#c8cbce"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="30,15 30,45"
        stroke="#c8cbce"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="50,15 50,45"
        stroke="#c8cbce"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />
      
      <Polyline
        points="70,15 70,45"
        stroke="#c8cbce"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="90,15 90,45"
        stroke="#c8cbce"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Anger Bar */}
      <Polyline
        points="10,30 10,45"
        stroke="#af6d7e"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Disgust Bar */}
      <Polyline
        points="30,40 30,45"
        stroke="#ccc600"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Fear Bar */}
      <Polyline
        points="50,25 50,45"
        stroke="#1fbba6"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Joy Bar */}
      <Polyline
        points="70,15 70,45"
        stroke="#00afd1"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Sadness Bar */}
      <Polyline
        points="90,25 90,45"
        stroke="#5d5d5d"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      </Svg>
    )
  }
}

export default EmotionGraph;