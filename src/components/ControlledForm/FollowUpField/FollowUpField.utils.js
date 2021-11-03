import { isNotEmpty } from "../../../utils";
import { flow, get } from "lodash/fp";

export const getFollowUp = get("followUp");
export const hasFollowUp = flow([getFollowUp, isNotEmpty]);
