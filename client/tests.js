import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import App from './components/App';

describe('<App />', () => {
  it('Displays "I\'m so triggered right now"', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.text()).to.be.equal("I'm so triggered right now");
  });
});
