import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const App = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text>Holaaaaaa</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
