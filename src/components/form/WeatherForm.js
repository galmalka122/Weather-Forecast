import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import useInput from "../../hooks/useInput";
import { Validators } from "./Validators";
import LocationsContext from "../../store/locationsCtx";
import { useContext, useState } from "react";

const WeatherForm = (props) => {
  const [loading, setLoading] = useState(false);
  const ctx = useContext(LocationsContext);

  const clearForm = () => inputs.forEach((input) => input.reset());

  const isValidForm = () =>
    inputs.reduce((prev, cur) => prev && cur.isValid, true);

  const toggleInfo = (show) =>
    inputs.forEach((input) => input.toggleInfo(show));

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
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
    setLoading(false);
  };

  const inputs = [
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
    useInput("name", [
      Validators.isEmpty,
      Validators.isContainOnlyLetters,
      ctx.isValidName,
    ]),
  ];

  const buttons = [
    { content: "Submit", onClick: onSubmitHandler },
    { content: "Clear", onClick: clearForm },
  ];

  return (
    <Card title="Add New Location">
      <form
        className={`${loading ? " opacity-25" : ""}`}
        onSubmit={onSubmitHandler}
      >
        {loading && (
          <div
            className="spinner-border text-dark position-absolute top-50 start-50"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {inputs.map((el) => (
          <Input
            key={el.input.name}
            input={el.input}
            info={el.message}
            invalid={el.validationClass}
            type="text"
            disable={loading}
          />
        ))}
        <div className="pt-3 gap-2 d-flex justify-content-between">
          {buttons.map((btn) => (
            <Button
              key={btn.content}
              props={{
                onClick: btn.onClick,
                disabled: loading,
                className: "col btn-block fw-bolder",
                content: btn.content,
              }}
            />
          ))}
        </div>
      </form>
    </Card>
  );
};

export default WeatherForm;
