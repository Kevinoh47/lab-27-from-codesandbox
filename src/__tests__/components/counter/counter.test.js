import React from 'react';
import renderer from "react-test-renderer";

import Counter from "../../../../src/components/counter/counter.js";   //hard coded to avoid .env issue

// import Counter from "components/counter/counter.js"; //this is supposed to work with the .env setting, but since .env is not uploaded this fails on travis.ci....


describe("counter", () => {
  it("is alive at application start", () => {
    let app = shallow(<Counter />);
    expect(app.find("section").exists()).toBeTruthy();
  });

  it("changes state by decrementing the count when the down link is clicked", () => {
    let app = mount(<Counter />);
    let downClick = app.find("a.downClicker");
    downClick.simulate("click");
    expect(app.state("count")).toEqual(-1);
  });

  it("changes state by incrementing the count when the up link is clicked", () => {
    let app = mount(<Counter />);
    let downClick = app.find("a.upClicker");
    downClick.simulate("click");
    expect(app.state("count")).toEqual(1);
  });

  // this test cannot run on codesandbox.io
  it("renders, and matches snapshot", () => {
    const tree = renderer.create(<Counter />);
    expect(tree).toMatchSnapshot();
  });

});
