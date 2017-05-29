import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Icon from '../../../../src/renderer/components/atoms/Icon';

describe('Label component', () => {
  const createDOM = (props = {}) => shallow(<Icon {...props} />);

  it('should render self and subcomponents', () => {
    const wrapper = createDOM();

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
