import { useState } from "react";
import Card from "./../UI/Card";
import Input from "./../UI/Input";
import Button from "./../UI/Button";

const WeatherForm = (props) => {
  const [inputs, setInputs] = useState({
    longitude: "",
    latitude: "",
    name: "",
  });
  const [alerts, setAlerts] = useState({});

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  function handleChange(event) {
    const newValues = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newValues);
  }

  function handleAlerts(name, message) {
    const newAlerts = { ...alerts, [name]: message };
    setAlerts(newAlerts);
  }

  return (
    <Card header={"Save New Location"}>
      <form className="row g-3">
        <Input
          alertMessage={alerts.longitude}
          className="col-md-6"
          label="Longitude:"
          input={{
            id: "longitudeInput",
            name: "longitude",
            type: "number",
            value: inputs.longitude || "",
            onChange: handleChange,
          }}
        />
        <Input
          alertMessage={alerts.latitude}
          className="col-md-6"
          label="Latitude:"
          input={{
            id: "latitudeInput",
            name: "latitude",
            type: "number",
            value: inputs.latitude || "",
            onChange: handleChange,
          }}
        />
        <Input
          className="col-md-12"
          label="Name:"
          input={{
            id: "nameInput",
            name: "name",
            type: "text",
            value: inputs.name || "",
            onChange: handleChange,
          }}
          alertMessage={alerts.name}
        />
        <div className="col-md-12 d-flex gap-2">
          <Button
            button={{
              type: "submit",
              onClick: onSubmitHandler,
            }}
            action="submit"
            className="align-self-start"
          />
          <Button
            button={{
              type: "reset",
              onClick: () => {
                setInputs({});
              },
            }}
            action="clear"
            className="align-self-end"
          />
        </div>
      </form>
    </Card>
  );
};

export default WeatherForm;
