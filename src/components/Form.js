import Alert from "./Alert";

export default function Form({
  formInputs,
  onValidation,
  validateInput,
  submitAlert,
  handleAlerts,
  clearForm,
}) {
  function handleFormSubmission(event) {
    event.preventDefault();
    handleAlerts({});
    if (validateInput()) onValidation();
  }

  return (
    <form className="border p-3" onSubmit={handleFormSubmission}>
      {submitAlert && <Alert message={submitAlert} />}
      {formInputs}
      <button type="submit" className="btn btn-primary">
        Get weather
      </button>
      <button type="reset" className="btn btn-primary" onClick={clearForm}>
        Clear form
      </button>
    </form>
  );
}
