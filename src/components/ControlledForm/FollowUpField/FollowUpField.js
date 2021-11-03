import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { getFollowUp, hasFollowUp } from "./FollowUpField.utils";

export const renderFields = (fields = []) =>
  fields.map(({ Component, ...props }, index) => (
    <div key={props?.name || index}>
      <Component key={props?.name} {...props} />

      {hasFollowUp(props) && (
        <FollowUpField
          key={`${props?.name}-followUp`}
          fieldName={props?.name}
          followUp={getFollowUp(props)}
        />
      )}
    </div>
  ));

const FollowUpField = ({ fieldName, followUp }) => {
  const { watch } = useFormContext();
  const { condition, fields } = followUp || {};
  const fieldValue = watch(fieldName);

  const renderFollowUpFields = useMemo(() => renderFields(fields), [fields]);

  const isConditionaMet = useMemo(() => condition(fieldValue), [
    condition,
    fieldValue,
  ]);

  return isConditionaMet ? renderFollowUpFields : null;
};

export default FollowUpField;
