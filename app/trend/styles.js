import { Animated, StyleSheet, View, Text, Dimensions } from 'react-native';

let styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    backgroundColor: '#f4f4f4'
  },
  publication: {
    fontSize: 11
  },
  headline: {
    flexWrap: 'wrap',
    color: '#000',
    fontSize: 16
  },
  moodScore: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column'
  },
  firstRow: {
    flex: 5
  },
  bar: {
    alignSelf: 'flex-end',
    borderRadius: 5,
    height: 4,
    marginRight: 5,
    backgroundColor: '#f55443',
  },

  trendRow: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  title: {
    fontSize: 36,
    padding: 20
  },
  date: {
    flex: 1,
    textAlign: 'center',
    paddingBottom: 20
  },
  full: {
    flex: 1
  }
});

export default styles;
