import WeatherForm from "./Form/WeatherForm";
import SavedLocations from "../components/SavedLocations";
export default function Locations({
  onValidation,
  inputLocations,
  handleRemove,
}) {
  debugger;
  return (
    <div>
      <SavedLocations
        inputLocations={inputLocations}
        handleRemove={handleRemove}
      />
      <WeatherForm onValidation={onValidation} />
    </div>
  );
}
