import React from "react";
import ControlledTextField from "../";
import { renderWithProviders } from "../../../test-utils";

describe("ControlledTextField", () => {
  it("should render correctly", () => {
    const { asFragment } = renderWithProviders(
      <ControlledTextField name="foo" label="Foo" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
