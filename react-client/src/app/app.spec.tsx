import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a Weather app text', () => {
    const AppComponent = render(<App />);
    expect(AppComponent.getByText('Weather app')).toBeTruthy();
  });
});
