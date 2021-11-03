import { eq, includes } from "lodash/fp";

export const isEqualToNo = eq("no");
export const isEqualToYes = eq("yes");
export const isOtherIncluded = includes("other");
