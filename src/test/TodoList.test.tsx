import  TodoList  from '../components/TodoList';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("<TodoList />", () => {
  it("should render successfully and match snapshot", () => {
    const { container } = render(
        <Provider store={store}> 
            <TodoList />
        </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

