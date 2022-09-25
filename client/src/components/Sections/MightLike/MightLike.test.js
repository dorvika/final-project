import { render, screen } from "@testing-library/react";
import MightLike from "./MightLike.jsx";

describe("<MightLike /> component", () => {
  it("should render passed section title", () => {
    render(<MightLike sectionTitle="Related Items" />);
    screen.getByRole("heading", {
      name: /related items/i,
    });
  });
  it("should match snapshot", () => {
    const { container } = render(<MightLike sectionTitle="Related Items" />);
    expect(container).toMatchSnapshot();
  });
});
