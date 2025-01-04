import { DataStore } from '@aws-amplify/datastore';
import { Button, Flex } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { DynamicInput } from "../dynamic-input";

export enum FormFieldType {
  Text = "text",
  Number = "number",
  Date = "date",
  Boolean = "boolean",
  Object = "object",
  List = "list"
}

interface DynamicFormProps {
  data: any;
  onChange: (newData: any) => void;
  onSubmit?: (newData: any) => void;
  options?: {
    [key: string]: {
      type: string;
      label?: string;
    };
  };
  resource?: {
    fields: {
      [key: string]: {
        type: string;
      };
    };
  };
  model?: any;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ data, onChange, onSubmit, options = {}, resource, model }) => {
  const [isNewRecord, setIsNewRecord] = useState(false);

  useEffect(() => {
    setIsNewRecord(!data.id);
  }, [data]);

  const renderFormFields = (obj: any, parentKey = "") => {
    return Object.entries(obj).flatMap(([key, value]) => {
      const fullPath = parentKey ? `${parentKey}.${key}` : key;
      const fieldOptions = options[fullPath] || {};
      const fieldType = fieldOptions.type || (resource && resource.fields[fullPath]?.type) || FormFieldType.Text;
      const fieldLabel = fieldOptions.label || key;

      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          return [
            <Flex key={fullPath} direction="column" gap="0.5rem">
              <strong>{fieldLabel}</strong>
              {value.map((item, index) => (
                <Flex key={`${fullPath}.${index}`} direction="column" gap="0.5rem">
                  <strong>{`${fieldLabel} ${index + 1}`}</strong>
                  {renderFormFields(item, `${fullPath}.${index}`)}
                </Flex>
              ))}
            </Flex>
          ];
        } else {
          return [
            <Flex key={fullPath} direction="column" gap="0.5rem">
              <strong>{fieldLabel}</strong>
              {renderFormFields(value, fullPath)}
            </Flex>
          ];
        }
      }

      return [
        <DynamicInput
          key={fullPath}
          data={data}
          path={fullPath}
          onChange={onChange}
          label={fieldLabel}
          type={fieldType}
          id={fullPath}
        />
      ];
    });
  };

  const handleSave = async () => {
    if (onSubmit) {
      onSubmit(data);
      return;
    }
    if (!model) {
      console.error("Model is not defined");
      return;
    }

    try {
      if (!model || typeof model.save !== 'function') {
        console.error("Model is not properly defined");
        return;
      }

      if (isNewRecord) {
        await model.save(data);
      } else if (data.id) {
        const original = await model.query(data.id);
        if (original) {
          const draft = { ...original, ...data };
          await model.save(draft);
        }
      }
      console.log(isNewRecord ? "New record created" : "Record updated successfully");
    } catch (error) {
      console.error("Error saving record:", error);
    }
  };

  const handleDelete = async () => {
    if (!model || isNewRecord) {
      console.error("Cannot delete: Model is not defined or record is new");
      return;
    }

    try {
      const toDelete = await DataStore.query(model, data.id);
      if (toDelete) {
        await DataStore.delete(toDelete);
        console.log("Record deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  return (
    <Flex direction="column" gap="1rem" data-testid="dynamic-form">
      {renderFormFields(data)}
      <Flex gap="1rem">
        <Button className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300" onClick={handleSave}>{isNewRecord ? "Create" : "Update"}</Button>
        {!isNewRecord && <Button onClick={handleDelete}>Delete</Button>}
      </Flex>
    </Flex>
  );
};

export { DynamicForm };
