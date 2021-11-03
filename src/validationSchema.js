import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const singleFormValidationResolver = yupResolver(
  Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short").required("Required"),
    checkboxes: Yup.array()
      .of(Yup.string())
      .compact()
      .min(1, "Please Select One"),
    uk_responsible_person_country: Yup.string().required("Required"),
    import_countries: Yup.array()
      .min(1, "Please Include One")
      .of(Yup.object().shape({ value: Yup.string().min(1, "Too short") })),
  })
);

export default singleFormValidationResolver;
