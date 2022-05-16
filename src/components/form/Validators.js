/**
 * a module to seperate validation logic for cleaner code
 * @type {{isValidLongitude: (function(*): {isValid, message: string}), isFloatNumber: (function(*): {isValid, message: string}), isEmpty: (function(*): {isValid, message: string}), isValidLatitude: (function(*): {isValid, message: string})}}
 */
export const Validators = (function () {
  /**
   * checks for empty input
   * @param input - user's input
   * @returns {{isValid: boolean, message: string}} - validation state and message
   */
  const isEmpty = (input) => {
    return {
      isValid: input.value !== undefined && input.value !== "",
      message: `${input.name} is required`,
    };
  };

  /**
   * checks if number in latitude range
   * @param input - user's input
   * @returns {{isValid: boolean, message: string}} - validation state and message
   */
  const isValidLatitude = (input) => {
    return {
      isValid: +input.value >= -90.0 && +input.value <= 90.0,
      message: `${input.name} must be a decimal between -90.0 and 90.0`,
    };
  };

  /**
   * checks if number in longitude range
   * @param input - user's input
   * @returns {{isValid: boolean, message: string}} - validation state and message
   */
  const isValidLongitude = (input) => {
    return {
      isValid: +input.value >= -180.0 && +input.value <= 180.0,
      message: `${input.name} must be a decimal between -180.0 and 180.0`,
    };
  };

  /**
   * checks if input is a float number
   * @param input - user's input
   * @returns {{isValid: boolean, message: string}} - validation state and message
   */
  const isFloatNumber = (input) => {
    return {
      isValid: !isNaN(parseFloat(+input.value)),
      message: `${input.name} must be a decimal number: only digits, a single minus and a single dot ar allowed`,
    };
  };

  return {
    isValidLongitude: isValidLongitude,
    isFloatNumber: isFloatNumber,
    isEmpty: isEmpty,
    isValidLatitude: isValidLatitude,
  };
})();
