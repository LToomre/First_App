import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../components/App";

Enzyme.configure({ adapter: new Adapter() })

describe("Unit Tests for App component", () => {
  test("First jest test checks if App component renders", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
