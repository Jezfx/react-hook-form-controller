import React from "react";
import ControlledDropdown from "../";
import { renderWithProviders } from "../../../test-utils";

describe("ControlledDropdown", () => {
  it("should render correctly", () => {
    const options = [
      { name: "bar", label: "Bar" },
      { name: "baz", label: "Baz" },
    ];
    const { asFragment } = renderWithProviders(
      <ControlledDropdown options={options} name="foo" label="Foo" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
