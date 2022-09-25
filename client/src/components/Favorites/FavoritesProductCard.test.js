import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import FavoritesProductCard from "./FavoritesProductCard.jsx";
import { rootReducer } from "../../store/store";
import { legacy_createStore as createStore } from "redux";
import { MemoryRouter } from "react-router-dom";

describe("<FavoritesProductCard /> component", () => {
  const store = createStore(rootReducer);
  it("should render <FavoritesProductCard/> with passed obj properties", () => {
    render(
      <Provider store={store}>
        <FavoritesProductCard
          product={{
            itemNo: 1,
            name: "sensey set",
            imageUrls: [
              "https://res.cloudinary.com/dhk15xaeq/image/upload/v1663692267/Postil/Bedding_Style_Hero_Amalfi-new_lpcv5n.jpg",
            ],
            color: "pink",
            size: "double",
            currentPrice: 259,
          }}
        />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    screen.getByRole("img");
    screen.getByRole("heading", {
      name: /sensey set/i,
    });
    screen.getByRole("heading", {
      name: /\$259/i,
    });
    screen.getByRole("heading", {
      name: /color:/i,
    });
    screen.getByRole("heading", {
      name: /pink/i,
    });
    screen.getByRole("heading", {
      name: /size:/i,
    });
    screen.getByRole("heading", {
      name: /double/i,
    });
  });
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <FavoritesProductCard
          product={{
            itemNo: 1,
            name: "sensey set",
            imageUrls: [
              "https://res.cloudinary.com/dhk15xaeq/image/upload/v1663692267/Postil/Bedding_Style_Hero_Amalfi-new_lpcv5n.jpg",
            ],
            color: "pink",
            size: "double",
            currentPrice: 259,
          }}
        />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(container).toMatchSnapshot();
  });
});
