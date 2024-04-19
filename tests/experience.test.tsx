import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Component: Experience', () => {
  function sum (a: number, b: number) {
    return a + b
  }
  it("should render correctly", () => {
        expect(sum(1, 1)).toBe(2)
  });
});