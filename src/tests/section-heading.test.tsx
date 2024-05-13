import React from 'react';
import { render } from '@testing-library/react';
import SectionHeading from '../components/section-heading';

describe('SectionHeading', () => {
  it('renders without throwing an error', () => {
    const getByText = render(<SectionHeading>Test Heading</SectionHeading>);
    console.log(getByText)

  });

  
});