import React from "react";
import ControlledRadioGroup from "../";
import { renderWithProviders } from "../../../test-utils";

describe("ControlledRadioGroup", () => {
  it("should match snapshot", () => {
    const { asFragment } = renderWithProviders(
      <ControlledRadioGroup options={[]} name="foo" label="Foo" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
