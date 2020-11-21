import * as React from 'react';
import renderer from 'react-test-renderer';

import Escalator from '../Escalator'

it(`renders correctly`, () => {
  const tree = renderer.create( <Escalator x={600} y={250} width={100} height={100} accessDirection={1}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
