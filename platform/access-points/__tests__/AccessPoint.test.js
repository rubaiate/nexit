import React from 'react';
import renderer from 'react-test-renderer';
import { G } from "react-native-svg";
import AccessPoint from '../AccessPoint';
import Lift from '../Lift'
import { Alignment } from '../../../models/ModelTypes';

it('render switch should render lift', () => {
    const tree = renderer.create(<AccessPoint x={300} y={250} width={100} height={100} accessDirection={1} type="lift"/>).toJSON();
    const treeLift = renderer.create(<G x={300} y={250}><Lift x={300} y={250} width={100} height={100} accessDirection={1}/></G>).toJSON();
    expect(tree).toEqual(treeLift);
});

it('align by start', () => {
    const tree = renderer.create(<AccessPoint x={300} y={250} width={100} height={100} accessDirection={1} type="staircase" apAlign={Alignment.Start}/>).toJSON();
    expect(tree).toMatchSnapshot()
});

it('align by end', () => {
    const tree = renderer.create(<AccessPoint x={300} y={250} width={100} height={100} accessDirection={1} type="staircase" apAlign={Alignment.End}/>).toJSON();
    expect(tree).toMatchSnapshot()
});

it('align by mid', () => {
    const tree = renderer.create(<AccessPoint x={300} y={250} width={100} height={100} accessDirection={1} type="staircase" apAlign={Alignment.Mid}/>).toJSON();
    expect(tree).toMatchSnapshot()
});