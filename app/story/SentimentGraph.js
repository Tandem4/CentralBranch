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
    
    {/*
      1) Add 100 to bar to shift scale from -100 to 100, into 0 to 200
      2) Divie by potential total of scale (200)
      3) multiply by potential total of SVG chart (80)
      5) Add 5 to account for indentation needed to render rounded ends
    */}

    let dataPoint = ((( this.props.article.score+100 ) / 200 * 80 ) + 5 );

    return (
      <Svg 
        height= "60"
        width= "90" >

     {/* Grid Lines */}
      <Polyline
        points="20,22 20,38"
        stroke="#727272"
        strokeWidth="3" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="40,22 40,38"
        stroke="#727272"
        strokeWidth="3" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="60,22 60,38"
        stroke="#727272"
        strokeWidth="3" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />
      
      {/* Bar */}
      <Polyline
        points="5,30 85,30"
        stroke="#c5ccd3"
        strokeWidth="4" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

   
      {/* Anger Pin */}
      <Circle 
        cx={dataPoint} 
        cy="30"
        r="8"
        fill="#fff"/>



      </Svg>
    )
  }
}

export default SentimentGraph;