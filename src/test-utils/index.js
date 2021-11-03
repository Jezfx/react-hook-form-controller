import { render } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";

export const renderWithProviders = (ui, { defaultValues = {} } = {}) => {
  const Wrapper = ({ children }) => {
    const methods = useForm({});
    return <FormProvider {...methods}>{children}</FormProvider>;
  };
  return render(ui, { wrapper: Wrapper });
};
