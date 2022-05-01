export const Validators = (function () {
  const isEmpty = function (input) {
    return {
      isValid:
        input.value !== undefined && input.value !== null && input.value !== "",
      message: `${input.name} is required`,
    };
  };

  const isValidLatitude = function (input) {
    return {
      isValid: input.value >= -90.0 && input.value <= 90.0,
      message: `Value must be a decimal between -90.0 and 90.0`,
    };
  };

  const isValidLongtitude = function (input) {
    return {
      isValid: input.value >= -180.0 && input.value <= 180.0,
      message: `Value must be a decimal between -180.0 and 180.0`,
    };
  };

  const isFloatNumber = function (input) {
    return {
      isValid: /^[+-]?\d+(\.\d+)?$/.test(input.value),
      message: `Value must be a decimal number: only digits, a single minus and a single dot ar allowed`,
    };
  };

  /** creates an error message if input isn't valid and returns the validation state
   * @param inputElement - the input value
   * @param validateFunc - the function for validation
   * @returns {boolean|*} - the final validation state
   */
  const validateInput = function (input, validateFunc, setAlert) {
    let v = validateFunc(input); // call the validation function
    if (!v.isValid) setAlert(input.name, v.message); // display the error message
    return v.isValid;
  };

  /**
   * runs on each query found and validates by functions sent
   * @param nodeAndValidatorArray - a query:function object to perform validations
   * @param checkAll - indicates if validation should stop for first failure
   * @returns {Promise<boolean>} - a boolean to inform if all inputs are valid
   */
  const validateForm = function (formInputs, validators, setAlert) {
    let v = true; //for node check
    for (const [name, value] of Object.entries(formInputs)) {
      let vf = true; //for each function check
      for (const validator of validators[name]) {
        vf = vf && validateInput({ name, value }, validator, setAlert);
        if (!vf) break;
      }
      v = v && vf;
    }
    return !!v;
  };

  return {
    validateForm: validateForm,
    isValidLongtitude: isValidLongtitude,
    isFloatNumber: isFloatNumber,
    isEmpty: isEmpty,
    isValidLatitude: isValidLatitude,
  };
})();
