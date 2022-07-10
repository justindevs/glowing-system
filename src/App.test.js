import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

describe('App rendering', () => {
  it('renders', () => {
    render(<App />);
  });
});
