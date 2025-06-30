import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe('SearchBar', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    expect(getByPlaceholderText('Search city...')).toBeTruthy();
  });
});