import 'react-native';
import React from 'react';
import SelectableTree from '../src/Components/SelectableTree';

import {it} from '@jest/globals';

import renderer, {act} from 'react-test-renderer';
import {treeData} from '../src/Mocks';

describe('SelectableTree', () => {
  const onSelectPress = jest.fn();
  it('renders correctly', () => {
    renderer.create(
      <SelectableTree onSelectPress={onSelectPress} data={treeData} />,
    );
  });

  it('should node be disabled when isSelectable prop is false', () => {
    const component = renderer.create(
      <SelectableTree onSelectPress={onSelectPress} data={treeData} />,
    );

    expect(
      component.root.findByProps({testID: '2'}).props.isSelectable,
    ).toBeFalsy();
  });

  it('should node be clickable when isSelectable prop is true', () => {
    const component = renderer.create(
      <SelectableTree onSelectPress={onSelectPress} data={treeData} />,
    );

    expect(
      component.root.findByProps({testID: '3'}).props.isSelectable,
    ).toBeUndefined();

    act(() => {
      component.root
        .findByProps({testID: '3'})
        .findByProps({
          testID: '3checkBox',
        })
        .props.onChange();
    });

    expect(
      component.root.findByProps({testID: '3'}).findByProps({
        testID: '3text',
      }).props.style[1].fontWeight,
    ).toBe('bold');
  });

  it('handle multi select', () => {
    const component = renderer.create(
      <SelectableTree onSelectPress={onSelectPress} data={treeData} />,
    );

    expect(
      component.root.findByProps({testID: '3'}).props.isSelectable,
    ).toBeUndefined();

    act(() => {
      component.root
        .findByProps({testID: '3'})
        .findByProps({
          testID: '3checkBox',
        })
        .props.onChange();
    });

    expect(
      component.root.findByProps({testID: '3'}).findByProps({
        testID: '3text',
      }).props.style[1].fontWeight,
    ).toBe('bold');

    act(() => {
      component.root
        .findByProps({testID: '3'})
        .findByProps({
          testID: '3checkBox',
        })
        .props.onChange();
    });

    expect(
      component.root.findByProps({testID: '3'}).findByProps({
        testID: '3text',
      }).props.style[1].fontWeight,
    ).toBe('normal');

    act(() => {
      component.root
        .findByProps({testID: '3'})
        .findByProps({
          testID: '3checkBox',
        })
        .props.onChange();
    });

    expect(
      component.root.findByProps({testID: '3'}).findByProps({
        testID: '3text',
      }).props.style[1].fontWeight,
    ).toBe('bold');
  });
});
