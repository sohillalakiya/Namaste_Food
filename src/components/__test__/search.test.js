import Body from "../Body";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/dummyResData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Shimmer should load on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  //   const shimmer = body.getByTestId("shimmer");
  //   expect(shimmer.children.length).toBe(18);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);

  console.log(shimmer);
});


test("search for restaurant in home page", async() => {
    const body = render(
        <StaticRouter>
          <Provider store={store}>
            <Body />
          </Provider>
        </StaticRouter>
      );

      await waitFor(() => expect(body.getByTestId("search-btn")))

      const input 

})