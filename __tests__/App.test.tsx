import 'react-native';
import React from 'react';
import App from '../App';

import {it} from '@jest/globals';

import renderer, {act} from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders onSelectPress works fine and console log selected items', () => {
  const app = renderer.create(<App />);

  const spiedConsole = jest.spyOn(global.console, 'log');

  act(() => {
    app.root
      .findByProps({testID: 'selectableTree'})
      .props.onSelectPress(['1', '2', '3']);
  });
  expect(spiedConsole).toHaveBeenCalledWith(['1', '2', '3']);
});
