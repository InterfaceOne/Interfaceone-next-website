import React from "react";
import {
  TextField,
  CheckBox,
  RadioButton,
  Select,
  MultiSelect,
  FileUpload,
  Switch,
  ToggleButton,
} from "../common/rfh-mui";
import { useForm } from "react-hook-form";
import { Button } from "../common/mui";
import * as S from "./form.styles";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const JsonFormCreator = (props) => {
  const form = {};
  const validationSchema = {};
  const buildValidationSchema = (data) => {
    Object.keys(data).forEach((keys) => {
      const type = data[keys]?.fieldProps?.type;
      let name = data && data[keys]?.fieldProps?.name;
      let required = data[keys]?.required;
      if (required) {
        switch (type) {
          case "text":
          case "date":
          case "time":
          case "radioButton":
          case "select":
            return (validationSchema[name] = yup
              .string(required?.message)
              .required(required?.message));
          case "password":
            return (validationSchema[name] = yup
              .string(required?.message)
              .required(required?.message)
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
              ));
          case "checkbox":
            return (validationSchema[name] = yup
              .boolean()
              .oneOf([required?.mustBe], required?.message)
              .required(required?.message));
          // case "fileUpload":
          //   // case "multiSelect":
          //   return (validationSchema[name] = yup
          //     .array(required?.message)
          //     .of(yup.object(required?.message))
          //     .required(required?.message)
          //     .nullable());

          case "email":
            return (validationSchema[name] = yup
              .string(required?.message)
              .email("Please enter vaild email address")
              .required(required?.message));

          case "confirmPassword":
            return (validationSchema[name] = yup
              .string(required?.message)
              .oneOf([yup.ref("password"), null], required?.message));
          default:
            return (validationSchema[name] = yup
              .string(required?.message)
              .required(required?.message));
        }
      }
    });
  };

  buildValidationSchema(props.schema);
  const schema = yup.object().shape(validationSchema);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      ...props.defaultValues,
    },
  });

  const handleJsonParser = (data) => {
    let details = {};
    Object.keys(data).forEach((keys) => {
      Object.assign(details, handleJsonObj(data[keys].fieldProps));
    });

    return details;
  };

  const handleJsonObj = (data) => {
    switch (data.type) {
      case "text":
      case "password":
      case "date":
      case "time":
      case "email":
        return addTextField(data);

      case "checkbox":
        return addCheckBox(data);

      case "select":
        return addSelect(data);

      case "sumbit":
        return addSubmit(data);

      case "multiSelect":
        return addMultiSelect(data);

      case "radioButton":
        return addRadioButton(data);

      case "fileUpload":
        return addFileUpload(data);

      case "switch":
        return addSwitch(data);

      case "customSwitch":
        return addCustomSwitch(data);
      case "confirmPassowrd":
        return addConfirmPassword(data);
      default:
        return addTextField(data);
    }
  };

  const addTextField = (data) => {
    form[data.name] = {
      component: TextField,
      fieldProps: {
        ...data,
        errors: errors,
        control: control,
      },
    };

    return form;
  };

  const addCheckBox = (data) => {
    form[data.name] = {
      component: CheckBox,
      fieldProps: {
        ...data,
        errors: errors,
        control: control,
      },
    };
    return form;
  };
  const addSelect = (data) => {
    form[data.name] = {
      component: Select,
      fieldProps: {
        ...data,
        errors: errors,
        control: control,
      },
    };
    return form;
  };
  const addMultiSelect = (data) => {
    form[data.name] = {
      component: MultiSelect,
      fieldProps: {
        ...data,
        errors: errors,
        control: control,
      },
    };
    return form;
  };
  const addRadioButton = (data) => {
    form[data.name] = {
      component: RadioButton,
      fieldProps: {
        ...data,
        errors: errors,
        control: control,
      },
    };
    return form;
  };
  const addFileUpload = (data) => {
    form[data.name] = {
      component: FileUpload,
      fieldProps: {
        ...data,
        setValue: setValue,
        control: control,
        errors: errors,

        // getSubmitFiles: (obj) => getSubmitFiles(obj, name),
      },
    };
    return form;
  };

  const addSubmit = (data) => {
    form[data.name] = {
      component: Button,
      fieldProps: {
        ...data,
        // disabled: isValid,
      },
    };
    return form;
  };

  const addSwitch = (data) => {
    form[data.name] = {
      component: Switch,
      fieldProps: {
        ...data,
        control: control,
      },
    };
    return form;
  };

  const addCustomSwitch = (data) => {
    form[data.name] = {
      component: ToggleButton,
      fieldProps: {
        ...data,
        control: control,
        setValue: setValue,
        getValues: getValues,
      },
    };
    return form;
  };
  const addConfirmPassword = (data) => {
    form[data.name] = {
      component: TextField,
      fieldProps: {
        ...data,
        errors: errors,
        control: control,
      },
    };
  };

  const LayoutCreator = (schema, layout) => {
    return (
      <>
        {layout.map((_, index) => {
          return (
            <S.FormLayout key={index}>
              {layout[index].columns.map((design) => {
                const fieldKey = schema[design];

                return fieldKey && layout[index].rowId === index + 1 ? (
                  <S.FormComponent type={fieldKey.fieldProps.type === "sumbit"}>
                    <fieldKey.component
                      key={fieldKey.id}
                      {...fieldKey.fieldProps}
                    />
                  </S.FormComponent>
                ) : null;
              })}
            </S.FormLayout>
          );
        })}
      </>
    );
  };
  handleJsonParser(props.schema);

  const layout = LayoutCreator(form, props.layout);

  return (
    <form
      className="space-y-3"
      onSubmit={handleSubmit((data) => {
        props.onSubmit(data);
      })}
    >
      {layout}
    </form>
  );
};

export default JsonFormCreator;

JsonFormCreator.propTypes = {
  schema: PropTypes.object.isRequired,
  layout: PropTypes.arrayOf(
    PropTypes.shape({
      rowId: PropTypes.number.isRequired,
      columns: PropTypes.array.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
};
