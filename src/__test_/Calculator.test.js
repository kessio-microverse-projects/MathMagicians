import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('snapshot test for Calculator Component', () => {
it('Matches the snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot('Calculator');
})
});