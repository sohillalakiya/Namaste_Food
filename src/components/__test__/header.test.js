import Header from "../Header";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/store";

test("Logo should be loaded on render header", () => {
    const header = render(<Provider store={store}><Header/></Provider>)
})