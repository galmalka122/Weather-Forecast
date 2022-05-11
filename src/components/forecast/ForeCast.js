import Jumbotrone from "../UI/Jumbotrone";
import { useContext } from "react";
import LocationsContext from "../../store/locationsCtx";

const ForeCast = (props) => {
  const ctx = useContext(LocationsContext);
  const { name, ...details } = ctx.selected;
  const weatherInfo = new URL("https://www.7timer.info/bin/api.pl");
  const weatherImage = new URL("https://www.7timer.info/bin/astro.php");
  const infoParams = {
    ...details,
    product: "civillight",
    output: "json",
  };
  const imageParams = {
    ...details,
    ac: 0,
    lang: "en",
    unit: "metric",
    output: "internal",
    tzshift: 0,
  };
  for (key in infoParams) params.append(key, infoParams[key]);

  return <Jumbotrone></Jumbotrone>;
};
export default ForeCast;
