import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import SelectableTree from './src/Components/SelectableTree';
import {treeData} from './src/Mocks';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <SelectableTree
        onSelectPress={selectedNames => {
          console.log(selectedNames);
        }}
        testID="selectableTree"
        data={treeData}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
