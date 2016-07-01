import { Animated, StyleSheet, View, Text, Dimensions } from 'react-native';

let styles = StyleSheet.create({
  body: {
    backgroundColor: '#eaedf1',
    flex: 1,
  },
  preTitle: {
    fontSize: 12,
    color: '#9ea7b3',
    fontFamily: 'Silom',
    textAlign: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    color: '#1d3037',
    fontFamily: 'Silom',
    textAlign: 'center'
  },
  tagline: {
    fontSize: 12,
    color: '#9ea7b3',
    fontFamily: 'Silom',
    textAlign: 'center',
    marginBottom: 30
  },
  moss: {
    backgroundColor: '#1fbba6', 
  },
  maroon: { 
    backgroundColor: '#af6d7e',  
  },
  mustard: {
    backgroundColor: '#ccc600', 
  },
  skyblue: {
    backgroundColor: '#00afd1', 
  },
  trendRows: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    flexWrap: 'wrap' 
  },
  dataSquare: {
    flex: 1
  },
  dataSquareTop: {
    alignItems: 'flex-end',
    padding: 10 
  },
  dataSquareCenter: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 15, 
    marginBottom: 10
  },
  dataSquareCenterText: {
    fontSize: 25, 
    fontFamily: 'Oswald', 
    color: '#eaedf1', 
    textAlign: 'center'
  },
  dataSquareBottom: {
    alignItems: 'center', 
    padding: 10
  },
  endSquare: {
    backgroundColor: '#323a45',
    flex: 1
  },
  endSquareTop: {
    alignItems: 'flex-end'
  },
  endSquareCenter: {
    alignItems: 'center', 
    marginTop: 30
  },
  endSquareCenterText: {
    fontSize: 25, 
    fontFamily: 'Oswald', 
    color: '#eaedf1'
  },
  endSquareBottom: {
    alignItems: 'center'
  },  
  endSquareBottomText: {
    fontSize: 20, 
    fontFamily: 'Oswald', 
    color: '#eaedf1'
  },
  date: {
    flex: 1,
    textAlign: 'center',
    paddingBottom: 20
  }
});

export default styles;
