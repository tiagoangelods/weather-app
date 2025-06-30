import { render } from "@testing-library/react";
import AppBar from "./AppBar";

describe('AppBar testes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppBar />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the title', () => {
    const { getByText } = render(<AppBar />);
    expect(getByText('Weather App')).toBeTruthy();
  });

  it('should display the location', () => {
    const { getByText } = render(<AppBar location="New York" />);
    expect(getByText('New York')).toBeTruthy();
  });
});
