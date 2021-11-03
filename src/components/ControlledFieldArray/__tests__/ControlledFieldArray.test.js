import React from "react";
import ControlledFieldArray from "../";
import { renderWithProviders } from "../../../test-utils";
import { waitFor, fireEvent, cleanup } from "@testing-library/react";

describe("ControlledFieldArray", () => {
  afterEach(cleanup);
  const props = {
    name: "test",
    label: "test",
  };
  it("should match snapshot", () => {
    const { asFragment } = renderWithProviders(
      <ControlledFieldArray {...props} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("should add a field when Add button is clicked", () => {
    const { queryAllByText, queryByText } = renderWithProviders(
      <ControlledFieldArray {...props} />
    );

    const addButton = queryByText("Add");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const fields = queryAllByText(props.label);
    expect(fields?.length).toEqual(2);
  });
  it("should not show remove button if there are no fields", () => {
    const { queryByText } = renderWithProviders(
      <ControlledFieldArray {...props} />
    );

    const removeButton = queryByText("Remove");

    expect(removeButton).not.toBeInTheDocument();
  });
  it("should show remove button if fields are added", async () => {
    const { queryByText } = renderWithProviders(
      <ControlledFieldArray {...props} />
    );
    const addButton = queryByText("Add");
    fireEvent.click(addButton);

    await waitFor(() => {
      const removeButton = queryByText("Remove");
      expect(removeButton).toBeInTheDocument();
    });
  });

  it("should remove fields when remove is clicked", async () => {
    const { queryAllByText, queryByText, queryAllByRole } = renderWithProviders(
      <ControlledFieldArray {...props} />
    );

    const addButton = queryByText("Add");
    fireEvent.click(addButton);

    const removeButton = queryByText("Remove");
    fireEvent.click(removeButton);
    const fields = queryAllByText(props.label);
    expect(fields?.length).toEqual(0);
  });
});
