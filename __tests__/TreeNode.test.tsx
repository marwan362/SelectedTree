import 'react-native';
import React from 'react';
import SelectableTree from '../src/Components/SelectableTree';

import {it} from '@jest/globals';

import renderer, {act} from 'react-test-renderer';
import {treeData} from '../src/Mocks';
import TreeNode from '../src/Components/SelectableTree/Components/TreeNode';

describe('TreeNode', () => {
  const onSelectPress = jest.fn(() => {});

  it('renders correctly', () => {
    renderer.create(
      <TreeNode
        onSelect={onSelectPress}
        selectedIds={[]}
        node={treeData[0]?.children?.[0]?.children?.[0] ?? treeData[0]}
      />,
    );
  });

  it('should node be clickable when isSelectable prop is true', () => {
    const component = renderer.create(
      <SelectableTree onSelectPress={onSelectPress} data={treeData} />,
    );

    expect(
      component.root.findByProps({testID: '4'}).props.isSelectable,
    ).toBeUndefined();

    act(() => {
      component.root
        .findByProps({testID: '4'})
        .findByProps({
          testID: '4checkBox',
        })
        .props.onChange();
    });

    expect(
      component.root.findByProps({testID: '4'}).findByProps({
        testID: '4text',
      }).props.style[1].fontWeight,
    ).toBe('bold');
  });
});
