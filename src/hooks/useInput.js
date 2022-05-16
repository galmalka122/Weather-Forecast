import { useReducer } from "react";

const initialInputState = {
  //the initial input states
  value: "",
  validationClass: "",
  isValid: false,
};

/**
 * reduces inputs states function's
 * @param state - the current input's state
 * @param action - the desired new state
 * @returns {(*&{validationClass: (string|*)})|(*&{isValid: *, message, validationClass: string, value})|
 * (*&{validationClass: string})|*} - the inputs states
 */
const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT": {
      //to handle input's changes
      return {
        ...state,
        validationClass: "",
        value: action.value,
        isValid: action.isValid,
        message: action.message,
      };
    }

    case "RESET": {
      //to handle clear
      return { ...action.data };
    }

    case "HIDE": {
      //to handle input's validation message
      return {
        ...state,
        validationClass: "",
      };
    }

    case "SHOW": {
      //to show input's validation message
      return {
        ...state,
        validationClass: action.validationClass,
      };
    }
    default:
      return state;
  }
};

/**
 * hook to handle input's states
 * @param inputTitle - the input's title
 * @param validators - the input's validators
 * @returns {{input: {onChange: valueChangeHandler, name, label: string, value, key}, isValid: *,
 * toggleInfo: toggleInfo, reset: reset, message, validationClass: (string|*)}} - the input's states
 */
const useInput = (inputTitle, validators) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    //apply reducer function
    ...initialInputState,
    message: `${inputTitle} is required`,
  });

  /**
   * to handle value changes
   * @param event - the value change event
   */
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

  /**
   * to handle form clear
   */
  const reset = () => {
    dispatch({
      type: "RESET",
      data: {
        ...initialInputState,
        message: `${inputTitle} is required`,
      },
    });
  };

  /**
   * to toggle input's validations states
   * @param show - th toggle mode indicator
   */
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
    isValid: inputState.isValid,
    toggleInfo,
    reset,
  };
};

export default useInput;
