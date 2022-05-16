import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import useInput from "../../hooks/useInput";
import { Validators } from "./Validators";
import LocationsContext from "../../store/locationsCtx";
import { useContext } from "react";

const WeatherForm = () => {
  const ctx = useContext(LocationsContext); //the site's context

  //resets the user's input to clear form
  const clearForm = () => inputs.forEach((input) => input.reset());

  //validates form inputs
  const isValidForm = () =>
    inputs.reduce((prev, cur) => prev && cur.isValid, true);

  /**
   * toggles inputs validation state
   * @param show - a flag to indicate toggle mode
   */
  const toggleInfo = (show) =>
    inputs.forEach((input) => input.toggleInfo(show));

  /**
   * handler to act when the form is submitted
   * @param event - the submit event
   */
  const onSubmitHandler = (event) => {
    event.preventDefault(); //prevent form from being submitted
    toggleInfo(true); //toggle validation's states

    //actions for validated inputs
    if (isValidForm()) {
      clearForm();
      ctx.addLocation(
        //add the user's location
        inputs.reduce(
          //create the location's detail object from the inputs
          (prev, cur) => ({ ...prev, [cur.input.name]: cur.input.value }),
          {}
        )
      );
    }
  };

  /**
   * arrange all form's inputs states and data in array
   * @type {{input: {onChange: valueChangeHandler, name, label: string, value, key}, isValid: *, toggleInfo: toggleInfo, reset: reset, message, validationClass: (string|*)}[]}
   */
  const inputs = [
    useInput("name", [Validators.isEmpty, ctx.isValidName]),
    useInput("longitude", [
      Validators.isEmpty,
      Validators.isFloatNumber,
      Validators.isValidLongitude,
    ]),
    useInput("latitude", [
      Validators.isEmpty,
      Validators.isFloatNumber,
      Validators.isValidLatitude,
    ]),
  ];

  /**
   * arrange all form's buttons
   * @type {[{onClick: onSubmitHandler, content: string},{onClick: (function(): void), content: string}]}
   */
  const buttons = [
    { content: "Submit", onClick: onSubmitHandler },
    { content: "Clear", onClick: clearForm },
  ];

  return (
    <Card title="Add New Location" className="col-12 col-md-6 mb-3">
      <form onSubmit={onSubmitHandler}>
        {inputs.map((el) => (
          <Input
            key={el.input.name}
            input={el.input}
            info={el.message}
            invalid={el.validationClass}
            type="text"
          />
        ))}
        <div className="pt-3 gap-2 d-flex justify-content-between">
          {buttons.map((btn) => (
            <Button key={btn.content} {...btn} />
          ))}
        </div>
      </form>
    </Card>
  );
};

export default WeatherForm;
