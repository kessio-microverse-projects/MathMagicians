import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('snapshot test for Calculator Component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('simulate user event', () => {
  test('click divide', () => {
    render(<Calculator />);
    expect(userEvent.click(screen.getByTestId('divide'))).toHaveBeenCalled;
  });
  test('click multiply', () => {
    render(<Calculator />);
    expect(userEvent.click(screen.getByTestId('multiply'))).toHaveBeenCalled;
  });

  test('click minus', () => {
    render(<Calculator />);
    expect(userEvent.click(screen.getByTestId('minus'))).toHaveBeenCalled;
  });


});