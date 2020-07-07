import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import AnimatedLoader from "../components/AnimatedLoader";
import Container from "../components/Container";
import InputModule from "../components/InputModule";
import TopBar from "../components/TopBar";
import { StoreProvider } from "../stores/store";

// So called "Smoke tests" or shallow rendering renders component in
//isolation from its children
it("renders App  without crashing", () => {
  shallow(<App />);
});

it("renders AnimatedLoader  without crashing", () => {
  shallow(<AnimatedLoader />);
});

test("renders Container  without crashing", () => {
  shallow(<Container />);
});

test("renders InputModule  without crashing", () => {
  shallow(<InputModule />);
});

test("renders TopBar  without crashing", () => {
  shallow(<TopBar />);
});

test("renders StoreProvider  without crashing", () => {
  shallow(<StoreProvider />);
});
