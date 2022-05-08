import { Validators } from "./Validators";

const formReducer = (inputs, action) => {
  switch (action.type) {
    case "nameInput": {
      const { isValid, message } = Validators.validateForm(
        {
          name: "Name",
          value: action.value,
        },
        [Validators.isEmpty]
      );
      return {
        ...inputs,

        name: {
          value: action.value,
          isValid: isValid,
          alertMessage: message,
        },
      };
    }
    case "longitudeInput": {
      const { isValid, message } = Validators.validateForm(
        {
          name: "Longitude",
          value: action.value,
        },
        [
          Validators.isEmpty,
          Validators.isFloatNumber,
          Validators.isValidLongitude,
        ]
      );
      return {
        ...inputs,

        longitude: {
          value: action.value,
          isValid: isValid,
          alertMessage: message,
        },
      };
    }

    case "latitudeInput": {
      const { isValid, message } = Validators.validateForm(
        {
          name: "Latitude",
          value: action.value,
        },
        [
          Validators.isEmpty,
          Validators.isFloatNumber,
          Validators.isValidLatitude,
        ]
      );
      return {
        ...inputs,

        latitude: {
          value: action.value,
          isValid: isValid,
          alertMessage: message,
        },
      };
    }
    case "Clear":
      return initalState;

    default:
      throw Error("Unknown action: " + action.type);
  }
};
export default formReducer;
export const initalState = [
  {
    name: "longitude",
    value: "",
    isValid: false,
    alertMessage: `Longitude is required`,
  },
  {
    name: "latitude",
    value: "",
    isValid: false,
    alertMessage: `Latitude is required`,
  },
  { name: "name", value: "", isValid: false, alertMessage: `Name is required` },
];
