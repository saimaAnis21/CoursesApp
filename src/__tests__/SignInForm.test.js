import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SignInForm from '../containers/SignInForm';

const store = createStore(() => [], {});
const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

Wrapper.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

describe('Sign In Form', () => {
  it('renders correctly', () => {
    const tree = render(<SignInForm />, { wrapper: Wrapper });
    expect(tree).toMatchSnapshot();
  });
});
