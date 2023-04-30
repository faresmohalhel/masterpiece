import classes from "Progress.module.css";
import { Fragment } from "react";

const Progress = () => {
  return (
    <Fragment>
      <progress
        className="progress progress-warning w-56"
        value="0"
        max="100"
      ></progress>
      <progress
        className="progress progress-warning w-56"
        value="10"
        max="100"
      ></progress>
      <progress
        className="progress progress-warning w-56"
        value="40"
        max="100"
      ></progress>
      <progress
        className="progress progress-warning w-56"
        value="70"
        max="100"
      ></progress>
      <progress
        className="progress progress-warning w-56"
        value="100"
        max="100"
      ></progress>
    </Fragment>
  );
};
export default Progress;
