import { isEmpty } from "lodash/fp";
export const isNotEmpty = (value) => !isEmpty(value);
