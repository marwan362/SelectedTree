import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import TreeNode, {Node} from './Components/TreeNode';

interface SelectableTreeProps {
  data: Node[];
  onSelectPress: (selectedNames: string[]) => void;
  customStyle?: {
    container: StyleProp<ViewStyle>;
    selectedNamesContainer: StyleProp<ViewStyle>;
    selectedNameText: StyleProp<ViewStyle>;
    title: StyleProp<TextStyle>;
  };
  title?: string;
  testID?: string;
}

const SelectableTree: React.FC<SelectableTreeProps> = ({
  data,
  onSelectPress,
  customStyle,
  title,
  testID,
}) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const selectedNames = useRef<Record<string, string>>({});

  const handleSelect = useCallback(
    (nodeId: number, parentIds: number[], parentNames: string) => {
      const uniquePath = parentIds.join('/');
      if (selectedIds.includes(nodeId)) {
        if (parentIds.at(-1) === nodeId) {
          delete selectedNames.current[uniquePath];
        }
        setSelectedIds(prevSelectedIds =>
          prevSelectedIds.filter(id => id !== nodeId),
        );
      } else {
        selectedNames.current[uniquePath] = parentNames;
        setSelectedIds(prevSelectedIds => [...prevSelectedIds, nodeId]);
      }

      onSelectPress(Object.values(selectedNames.current));
    },
    [selectedNames, selectedIds, onSelectPress],
  );

  return (
    <ScrollView
      testID={testID}
      contentContainerStyle={[styles.container, customStyle?.container]}>
      <Text style={[styles.title, customStyle?.title]}>
        {title ?? 'Browse Products'}
      </Text>

      {data.map(node => (
        <TreeNode
          key={node.id}
          node={node}
          selectedIds={selectedIds}
          onSelect={handleSelect}
          customStyle={node?.customStyle}
        />
      ))}

      <View
        style={[
          styles.selectedNamesContainer,
          customStyle?.selectedNamesContainer,
        ]}>
        {Object.values(selectedNames.current).map(val => (
          <Text
            key={val}
            style={[styles.selectedNameText, customStyle?.selectedNameText]}>
            {val}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 80,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  selectedNamesContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
  selectedNameText: {
    marginBottom: 5,
  },
});

export default React.memo(SelectableTree);
