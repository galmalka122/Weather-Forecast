import { useReducer } from "react";

const initialInputState = {
  value: "",
  validationClass: "",
  isValid: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT": {
      return {
        ...state,
        validationClass: "",
        value: action.value,
        isValid: action.isValid,
        message: action.message,
      };
    }

    case "RESET": {
      return { ...action.data };
    }

    case "HIDE": {
      return {
        ...state,
        validationClass: "",
      };
    }

    case "SHOW": {
      return {
        ...state,
        validationClass: action.validationClass,
      };
    }
    default:
      return state;
  }
};

const useInput = (inputTitle, validators) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    ...initialInputState,
    message: `${inputTitle} is required`,
  });
  const valueChangeHandler = (event) => {
    const value = event.target.value.trim();
    let a = { isValid: true, message: "" };
    for (const validator of validators) {
      a = validator({
        value,
        name: inputTitle,
      });
      if (!a.isValid) {
        break;
      }
    }
    dispatch({
      type: "INPUT",
      ...inputState,
      value: value,
      isValid: a.isValid,
      message: a.isValid ? "" : a.message,
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
      data: {
        ...initialInputState,
        message: `${inputTitle} is required`,
      },
    });
  };

  const toggleInfo = (show) => {
    if (show) {
      const validationClass = inputState.isValid ? "is-valid" : "is-invalid";
      dispatch({
        type: "SHOW",
        validationClass: validationClass,
      });
    } else dispatch({ type: "HIDE" });
  };

  return {
    input: {
      label: inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1) + ":",
      name: inputTitle,
      key: inputTitle,
      value: inputState.value,
      onChange: valueChangeHandler,
    },

    validationClass: inputState.validationClass,
    message: inputState.message,
    toggleInfo,
    isValid: inputState.isValid,
    reset,
  };
};

export default useInput;
