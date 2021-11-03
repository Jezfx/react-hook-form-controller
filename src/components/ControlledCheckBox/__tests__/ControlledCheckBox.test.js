import React from "react";
import ControlledCheckBox from "../";
import { renderWithProviders } from "../../../test-utils";

describe("ControlledCheckBox", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderWithProviders(<ControlledCheckBox />);

    expect(asFragment()).toMatchSnapshot();
  });
});
