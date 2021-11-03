import ControlledTextField from "./components/ControlledTextField";
import ControlledRadioGroup from "./components/ControlledRadioGroup";
import ControlledFieldArray from "./components/ControlledFieldArray";
import ControlledCheckBox from "./components/ControlledCheckBox";
import ControlledDropdown from "./components/ControlledDropdown";

import { isEqualToNo, isEqualToYes } from "./App.utils";

const dropdownOptions = [
  { label: "Please select", disabled: true },
  { value: "GBP", label: "GBP" },
  { value: "EUR", label: "EUR" },
  { value: "USD", label: "USD" },
];

const checkboxes = [
  {
    value: "CheckBoxOne",
    label: "CheckBoxOne",
  },
  { value: "CheckBoxTwo", label: "CheckBoxTwo" },
  { value: "CheckBoxThree", label: "CheckBoxThree" },
];

export const fields = [
  {
    Component: ControlledTextField,
    name: "firstName",
    label: "Text Field",
  },
  {
    Component: ControlledCheckBox,
    name: "checkboxes",
    label: "CheckBoxes",
    options: checkboxes,
  },
  {
    Component: ControlledFieldArray,
    name: "import_countries",
    label: "Import contries",
  },
  {
    Component: ControlledRadioGroup,
    name: "level_one",
    label: "Level one (check yes to see level 2)",
    options: [
      {
        name: "isSameName",
        label: "Yes",
        value: "yes",
      },
      {
        name: "isDifferentName",
        label: "No",
        value: "no",
      },
    ],
    followUp: {
      condition: isEqualToYes,
      fields: [
        {
          label: "Other Options...",
          Component: ControlledRadioGroup,
          name: "other_options",
          options: [
            {
              name: "isSameName",
              label: "Yes",
              value: "yes",
            },
            {
              name: "isDifferentName",
              label: "No (check this to see the next follow on input)",
              value: "no",
            },
          ],
          followUp: {
            condition: isEqualToNo,
            fields: [
              {
                label: "Other Name...",
                Component: ControlledTextField,
                name: "level_three",
              },
            ],
          },
        },
      ],
    },
  },
  {
    Component: ControlledDropdown,
    name: "uk_responsible_person_country",
    label: "Country *",
    options: dropdownOptions,
  },
];
