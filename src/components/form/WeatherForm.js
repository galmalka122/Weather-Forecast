import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import useInput from "../../hooks/useInput";
import { Validators } from "./Validators";
import LocationsContext from "../../store/locationsCtx";
import { useContext, useState } from "react";

const WeatherForm = (props) => {
  const ctx = useContext(LocationsContext);

  const clearForm = () => inputs.forEach((input) => input.reset());

  const isValidForm = () =>
    inputs.reduce((prev, cur) => prev && cur.isValid, true);

  const toggleInfo = (show) =>
    inputs.forEach((input) => input.toggleInfo(show));

  const onSubmitHandler = (event) => {
    event.preventDefault();

    toggleInfo(true);
    if (isValidForm()) {
      clearForm();
      ctx.addLocation(
        inputs.reduce(
          (prev, cur) => ({ ...prev, [cur.input.name]: cur.input.value }),
          {}
        )
      );
    }
  };

  const inputs = [
    useInput("name", [
      Validators.isEmpty,
      Validators.isContainOnlyLetters,
      ctx.isValidName,
    ]),
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
