import ControlledTextField from "../ControlledTextField";
import ControlledRadioGroup from "../ControlledRadioGroup";

export const defaultFields = [
  {
    Component: ControlledTextField,
    name: "firstName",
    label: "Text Field",
  },
];

export const followUpFields = [
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
      condition: () => true,
      fields: [
        {
          label: "Other Options...",
          Component: ControlledRadioGroup,
          name: "other_options",
          options: [
            {
              name: "isSameName",
              label: "Follow up",
              value: "yes",
            },
          ],
        },
      ],
    },
  },
];
