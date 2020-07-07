import React from "react";
import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "../App";
import AnimatedLoader from "../components/AnimatedLoader";
import Container from "../components/Container";
import InputModule from "../components/InputModule";
import Loaders from "../components/Loaders";
import StartStop from "../components/StartStop";
import TopBar from "../components/TopBar";
import { StoreProvider } from "../stores/store";

// So called "Smoke tests" or shallow rendering renders component in
//isolation from its children
// it() & test() methods are equal
it("renders App  without crashing", () => {
  render(<App />);

  screen.debug();
});

// it("renders AnimatedLoader  without crashing", () => {
//   render(<AnimatedLoader />);

//   screen.debug();
// });

// test("renders Container  without crashing", () => {
//   render(<Container />);

//   screen.debug();
// });

// test("renders InputModule  without crashing", () => {
//   render(<InputModule />);

//   screen.debug();
// });

// test("renders Loaders  without crashing", () => {
//   render(<Loaders />);
// });

// test("renders StartStop  without crashing", () => {
//   render(<StartStop />);
// });

// test("renders TopBar  without crashing", () => {
//   render(<TopBar />);

//   screen.debug();
// });

test("renders StoreProvider  without crashing", () => {
  render(<StoreProvider />);

  screen.debug();
});
