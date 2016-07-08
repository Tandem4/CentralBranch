import { Animated, StyleSheet, View, Text, Dimensions } from 'react-native';

let styles = StyleSheet.create({
  body: {
    backgroundColor: '#eaedf1',
    flex: 1,
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
    flexWrap: 'wrap',
    flex: 1
  },
  dataSquare: {
    flexWrap: 'wrap'
  },
  dataSquareTop: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 10
  },
  dataSquareTopText: {
    fontSize: 14, 
    fontFamily: 'Oswald', 
    color: '#eaedf1'
  },
  dataSquareCenter: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20, 
    marginBottom: 10
  },
  dataSquareCenterText: {
    fontSize: 30, 
    fontFamily: 'Oswald', 
    color: '#eaedf1', 
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 35
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
