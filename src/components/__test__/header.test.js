import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should be loaded on render header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // check for logo
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.js");
});

test("check online status on render", () => {
  // check for the online status
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("Online Status: ✅");
});

test("check cart having 0 items on initial render", () => {
  // check cart items
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0");
});
