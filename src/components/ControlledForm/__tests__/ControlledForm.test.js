import React from "react";
import {
  waitFor,
  fireEvent,
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

import ControlledForm from "../";
import { defaultFields, followUpFields } from "../ControlledForm.mock";

const withFormWrapper = (Component) => (componentProps, defaultValues = {}) => {
  const methods = useForm({ defaultValues });
  return <Component methods={methods} {...componentProps} />;
};

describe("Controlled Form", () => {
  afterEach(cleanup);

  const props = {
    buttons: () => <Button type="submit">Submit</Button>,
    onSubmit: jest.fn(),
  };

  const CompWithForm = withFormWrapper(ControlledForm);
  it("should render correctly", () => {
    const { asFragment } = render(
      <CompWithForm fields={defaultFields} {...props} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call onsubmit when submit button is clicked", async () => {
    render(<CompWithForm fields={defaultFields} {...props} />);

    const button = screen.getByText("Submit");
    fireEvent.click(button);

    await waitFor(() => {
      expect(props.onSubmit).toHaveBeenCalled();
    });
  });

  it("should render follow up fields when condition is true", () => {
    render(<CompWithForm fields={followUpFields} {...props} />);
    const followUp = screen.getByLabelText("Follow up");

    expect(followUp).toBeInTheDocument();
  });
});
