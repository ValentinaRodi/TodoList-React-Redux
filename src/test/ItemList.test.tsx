import  ItemList  from '../components/ItemList';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("<ItemList />", () => {
  it("should render successfully and match snapshot", () => {
    const { container } = render(
        <Provider store={store}> 
            <ItemList />
        </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
