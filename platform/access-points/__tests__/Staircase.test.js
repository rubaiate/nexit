import React from 'react';
import renderer from 'react-test-renderer';

import Staircase from '../Staircase';

it('render correctly', () => {
    const tree = renderer.create(<Staircase x={600} y={100} width={100} height={100} accessDirection={1}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
