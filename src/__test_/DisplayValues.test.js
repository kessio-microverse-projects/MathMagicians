import React from 'react';
import renderer from 'react-test-renderer';
import DisplayValues from '../components/DisplayValues';

describe('snapshot test for DisplayValues Component', () => {
it('Matches the snapshot', () => {
    const tree = renderer.create(<DisplayValues />).toJSON();
    expect(tree).toMatchSnapshot('DisplayVlues');
})
});