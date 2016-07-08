import React, { Animated, Component } from 'react';
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

  {/* 
    1) Y axis starts at top, which reverses graph. 
        Items with value 5 will display fuller bar than
        items with value 99. To reverse this, subtract 
        value from 100. 
    2) Divide by full potential value (100)
    3) Multiply by full potential value of SVG chart (30)
    4) Add 15 to count for the indentation needed to render
        rounded corners .
  */}

    let anger = (((( 100 - this.props.article.anger ) / 100 ) * 30 ) + 15 );
    let disgust = (((( 100 - this.props.article.disgust ) / 100 ) * 30 ) + 15 );
    let fear = (((( 100 - this.props.article.fear ) / 100 ) * 30 ) + 15 );
    let joy = (((( 100 - this.props.article.joy ) / 100 ) * 30 ) + 15 );
    let sadness = (((( 100 - this.props.article.sadness ) / 100 ) * 30 ) + 15 );


    let angerPt = `10,${anger} 10,45`;
    let disgustPt = `30,${disgust} 30,45`;
    let fearPt = `50,${fear} 50,45`;
    let joyPt = `70,${joy} 70,45`;
    let sadnessPt = `90,${sadness} 90,45`;

    // let dataPoints = `10,40 20,${y1} 30,${y2} 40,${y3}`;
    // "anger":99,"disgust":7,"fear":46,"joy":4,"sadness":5,
    return (
      <Svg 
        height= "60"
        width= "100" >

     {/* Underlaying Bars */}
      <Polyline
        points="10,15 10,45"
        stroke="#727272"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="30,15 30,45"
        stroke="#727272"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="50,15 50,45"
        stroke="#727272"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />
      
      <Polyline
        points="70,15 70,45"
        stroke="#727272"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      <Polyline
        points="90,15 90,45"
        stroke="#727272"
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Anger Bar */}
      <Polyline
        points={angerPt}
        stroke="#af6d7e"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Disgust Bar */}
      <Polyline
        points={disgustPt}
        stroke="#ccc600"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Fear Bar */}
      <Polyline
        points={fearPt}
        stroke="#1fbba6"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Joy Bar */}
      <Polyline
        points={joyPt}
        stroke="#00afd1"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      {/* Sadness Bar */}
      <Polyline
        points={sadnessPt}
        stroke="#9ea7b3"
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" />

      </Svg>
    )
  }
}

export default EmotionGraph;