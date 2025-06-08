import { useLocation } from "react-router-dom";
import { ConvertDate } from "../utils";
import { BackButton } from "../ui";
import LOCATION from "../assets/location.svg";

interface LocationState {
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export const CardLocation = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  return (
    <div className="card-container">
      <BackButton />

      <div>
        <div className="location-card">
          <div className="location-image">
            <img src={LOCATION} alt={state.name} className="avatar" />
          </div>
          <div className="location-info">
            <pre>
              <u>Name:</u> {state.name}
            </pre>
            <pre>
              <u>Type:</u> {state.type}
            </pre>
            <pre>
              <u>Dimension:</u> {state.dimension}
            </pre>
            <pre>
              <u>Created:</u> {ConvertDate(state.created)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
