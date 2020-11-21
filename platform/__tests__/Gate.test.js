import React from 'react';
import renderer from 'react-test-renderer';

import Gate from '../Gate'

it('renders correctly', () => {
    const tree = renderer.create(<Gate x={10} y={10} width={1000} height={60}/>).toJSON();
    expect(tree).toMatchSnapshot()
})