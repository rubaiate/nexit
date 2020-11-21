import React from 'react';
import renderer from 'react-test-renderer';

import Lift from '../Lift';

it('render correctly', () => {
    const tree = renderer.create(<Lift x={300} y={250} width={100} height={100} accessDirection={1}/>).toJSON();
    expect(tree).toMatchSnapshot();
})