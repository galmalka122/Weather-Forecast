import { useContext, useState, useEffect } from "react";
import LocationsContext from "../../store/locationsCtx";
import Card from "../UI/Card";

import ForecastDetail from "./ForecastDetail";

const ForeCast = (props) => {
  const [date, setDate] = useState(0);
  const [title, setTitle] = useState("");
  const ctx = useContext(LocationsContext);

  useEffect(() => {
    setTitle(ctx.selected.name);
    setDate(0);
  }, [ctx.data?.weather]);

  const onClickHandler = (index) => {
    setDate(index);
  };

  return (
    ctx.data?.weather && (
      <Card title={`Forcast: ${title}`} className="col">
        <div className="container py-3">
          <div className="row justify-content-center">
            <button
              className="col-auto btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#meteoCollapse"
              aria-expanded="false"
              aria-controls="meteoCollapse"
            >
              Show Astro
            </button>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto collapse" id="meteoCollapse">
              <img
                className="img-fluid align-self-center py-3 img-md-none"
                id="meteoCollapse"
                src={ctx.data.image}
                alt="weatherImage"
              />
            </div>
          </div>
        </div>
        <ForecastDetail
          data={ctx.data.weather}
          onClick={onClickHandler}
          selected={date}
        />
      </Card>
    )
  );
};
export default ForeCast;
