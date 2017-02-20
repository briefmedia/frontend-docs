import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

// Messages
import SearchForm from '../SearchForm';


/**
 * Message Tests
 *
 * 1. ErrorMessage
 *
 */

describe('<SearchForm />', () => {

  it('should render', () => {

    const wrapper = mount(
      <SearchForm />
    );

    expect(wrapper).to.have.length(1);
  });

  it('should render', () => {

    const wrapper = mount(
      <SearchForm />
    );

    expect(wrapper).to.have.length(1);
  });
});
