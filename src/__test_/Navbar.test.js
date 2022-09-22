import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

describe('snapshot test for Navbar Component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot('Navbar');
  });
});
