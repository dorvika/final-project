import { render, screen } from "@testing-library/react";
import Popular from "./Popular.jsx";

describe("<Popular /> component", () => {
  it("should render heading Popular and link See All", () => {
    render(<Popular />);
    screen.getByRole("heading", {
      name: /popular/i,
    });
    screen.getByRole("link", {
      name: /see all/i,
    });
  });
  it("should match snapshot", () => {
    const { container } = render(<Popular />);
    expect(container).toMatchSnapshot();
  });
});
