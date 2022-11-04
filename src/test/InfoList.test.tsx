import  InfoList  from '../components/InfoList';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("<InfoList />", () => {
  it("should render successfully and match snapshot", () => {
    const { container } = render(
        <Provider store={store}> 
            <InfoList />
        </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
