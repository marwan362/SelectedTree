import React, {useCallback} from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../../../../Utils/Contansts';

export interface Node {
  id: number;
  name: string;
  customStyle?: TreeNodeProps['customStyle'];
  children?: Node[];
}

export interface TreeNodeProps {
  node: Node;
  selectedIds: number[];
  parentIds?: number[];
  onSelect: (nodeId: number, parentIds: number[], parentNames: string) => void;
  parentNames?: string;
  customStyle?: {
    treeNodeContainer: StyleProp<ViewStyle>;
    nodeRow: StyleProp<ViewStyle>;
    nodeName: StyleProp<ViewStyle>;
    childNodeContainer: StyleProp<ViewStyle>;
  };
}

const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  selectedIds,
  onSelect,
  parentIds = [],
  parentNames = '',
  customStyle,
}) => {
  const isSelected = selectedIds.includes(node.id);
  const isSelectable = !(
    node.children === undefined ||
    (Array.isArray(node.children) && node.children.length === 0)
  );
  const handleSelect = useCallback(() => {
    onSelect(
      node.id,
      [...parentIds, node.id],
      parentNames.replace('/', '').concat('/').concat(node.name),
    );
  }, [parentIds, node.id, parentNames, node.name, onSelect]);

  return (
    <View
      testID={node.id.toString()}
      style={[styles.treeNodeContainer, customStyle?.treeNodeContainer]}>
      <View style={[styles.nodeRow, customStyle?.nodeRow]}>
        <CheckBox
          testID={node.id.toString() + 'checkBox'}
          disabled={isSelectable}
          onChange={handleSelect}
          onCheckColor={Colors.white}
          onFillColor={Colors.mediumBlue}
          onTintColor={Colors.mediumBlue}
          tintColors={{
            true: Colors.mediumBlue,
            false: Colors.customGray,
          }}
          value={isSelected}
          boxType="square"
          style={styles.checkBox}
          animationDuration={0.4}
        />
        <Text
          testID={node.id.toString() + 'text'}
          style={[
            styles.nodeName,
            // eslint-disable-next-line react-native/no-inline-styles
            {fontWeight: isSelected ? 'bold' : 'normal'},
            customStyle?.nodeName,
          ]}>
          {node.name}
        </Text>
      </View>

      {node.children && node.children.length > 0 && (
        <View
          style={[styles.childNodeContainer, customStyle?.childNodeContainer]}>
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              selectedIds={selectedIds}
              parentIds={[...parentIds, node.id]}
              parentNames={parentNames + '/' + node.name}
              onSelect={onSelect}
              customStyle={child?.customStyle}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  treeNodeContainer: {
    marginLeft: 20,
    marginTop: 5,
  },
  nodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nodeName: {
    marginStart: 8,
  },
  childNodeContainer: {
    marginLeft: 20,
  },
  checkBox: {
    height: 20,
    width: 20,
  },
});

export default React.memo(TreeNode);
