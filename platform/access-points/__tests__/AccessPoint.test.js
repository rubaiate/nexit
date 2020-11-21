import React from 'react';
import renderer from 'react-test-renderer';
import AccessPoint from '../AccessPoint';
import Lift from '../Lift'

it('render switch should render lift', () => {
    const tree = renderer.create(<AccessPoint x={300} y={250} width={100} height={100} accessDirection={1} type="lift"/>).toJSON();
    const treeLift = renderer.create(<Lift x={300} y={250} width={100} height={100} accessDirection={1}/>).toJSON();
    expect(tree).toEqual(treeLift);
});