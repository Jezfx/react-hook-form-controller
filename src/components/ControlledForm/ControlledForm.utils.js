import { isNotEmpty } from "../../utils";
import { get, flow, without, isArray } from "lodash/fp";
import { transform } from "lodash";

export const getName = get("name");
export const getFollowUp = get("followUp");
export const hasFollowUp = flow([getFollowUp, isNotEmpty]);

const omitUndefinedAndNull = without([undefined, null]);
const formatArray = flow(omitUndefinedAndNull);

export const formatValues = (values) =>
  transform(
    values,
    function (result, value, key) {
      const formatedValues = isArray(value) ? formatArray(value) : value;

      return (result[key] = formatedValues);
    },
    {}
  );
