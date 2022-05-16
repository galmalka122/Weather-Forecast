export const Validators = (function () {
  const isEmpty = (input) => {
    return {
      isValid: input.value !== undefined && input.value !== "",
      message: `${input.name} is required`,
    };
  };

  const isContainOnlyLetters = (input) => {
    return {
      isValid: /^[a-zA-Z ]*$/.test(input.value),
      message: `${input.name} must contain only english letters`,
    };
  };

  const isValidLatitude = (input) => {
    return {
      isValid: +input.value >= -90.0 && +input.value <= 90.0,
      message: `${input.name} must be a decimal between -90.0 and 90.0`,
    };
  };

  const isValidLongitude = (input) => {
    return {
      isValid: +input.value >= -180.0 && +input.value <= 180.0,
      message: `${input.name} must be a decimal between -180.0 and 180.0`,
    };
  };

  const isFloatNumber = (input) => {
    return {
      isValid: !isNaN(parseFloat(+input.value)),
      message: `${input.name} must be a decimal number: only digits, a single minus and a single dot ar allowed`,
    };
  };

  return {
    isContainOnlyLetters: isContainOnlyLetters,
    isValidLongitude: isValidLongitude,
    isFloatNumber: isFloatNumber,
    isEmpty: isEmpty,
    isValidLatitude: isValidLatitude,
  };
})();
