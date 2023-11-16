import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

test('renders loader component', () => {
  const { getByText } = render(<Loader />);
  const loaderElement = getByText(/Loading.../i);
  expect(loaderElement).toBeInTheDocument();
});
