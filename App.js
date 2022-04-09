import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.name}>Purple: #C9C9FF</Text>
      </View>
      <View style={{...styles.item, backgroundColor: '#3D85C6'}}>
        <Text style={styles.name}>Blue: #3D85C6</Text>
      </View>
      <View style={{...styles.item, backgroundColor: '#96CC96'}}>
        <Text style={styles.name}>Green: #96CC96</Text>
      </View>
      <View style={{...styles.item, backgroundColor: '#F4B940'}}>
        <Text style={styles.name}>Yellow: #F4B940</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 34,
    paddingHorizontal: 16,
    marginBottom: 18,
  },
  item: {
    flex: 1,
    backgroundColor: '#C9C9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 6,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
