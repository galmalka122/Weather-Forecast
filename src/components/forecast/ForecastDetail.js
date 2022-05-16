import Image from "../../assets/Image";
import { winds, types } from "./details";

const ForecastDetail = (props) => {
  const tData = props.data.map((el) => {
    //transforms the data to table with the details objects
    const date = new Date( //applies the date for details
      el.date.toString().replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3")
    ).toLocaleDateString("en-Us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    //transform fetched data
    const params = {
      "": <Image name={types[el.weather].name} />,
      date: date,
      Weather: types[el.weather].type,
      Description: types[el.weather].meaning,
      Temperature: `${el.temp2m.min}-${el.temp2m.max}`,
      "Wind conditions": winds[el["wind10m_max"]],
    };
    return Object.entries(params).map((en, index) => (
      <td key={params.date + "-data-" + index} data-th={en[0]}>
        {en[1]}
      </td>
    ));
  });

  const buttons = props.data.map((el, index) => {
    //creates the days buttons (for smaller view ports)
    const date = new Date(
      el.date.toString().replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3")
    ).toLocaleDateString("en-Us", {
      weekday: "short",
    });
    return (
      <button
        type="button"
        className="btn btn-outline-secondary"
        value={index}
        key={date}
        onClick={() => props.onClick(index)}
      >
        {date}
      </button>
    );
  });

  return (
    <div className="row d-flex flex-md-row flex-column">
      <div className="col-12 d-flex">
        <table className="table table-md-vert">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Weather</th>
              <th>Description</th>
              <th>Temperature</th>
              <th>Wind conditions</th>
            </tr>
          </thead>
          <tbody>
            {tData.map((data, index) => {
              return (
                <tr
                  key={index}
                  className={props.selected === index ? "" : "none"}
                >
                  {data}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <div className="btn-group btn-group-sm btn-none d-none" role="group">
          {buttons}
        </div>
      </div>
    </div>
  );
};
export default ForecastDetail;
