import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Viewport from "../components/layouts/viewport";

Enzyme.configure({ adapter: new Adapter() })

describe("Unit tests for React custom viewport component", () => {
  test("Confirms Viewport component will render", () => {
    const wrapper = shallow(<Viewport />);

    expect(wrapper.exists()).toBe(true);
  });
});
