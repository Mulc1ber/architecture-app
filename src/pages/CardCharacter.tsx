import { useLocation } from "react-router-dom";
import { ConvertDate } from "../utils";
import { BackButton } from "../ui";

interface CharacterState {
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  created: string;
  image: string;
}

export const CardCharacter = () => {
  const location = useLocation();
  const state = location.state as CharacterState;

  return (
    <div className="card-container">
      <BackButton />

      <div>
        <div className="character-card">
          <div className="character-image">
            <img src={state.image} alt={state.name} className="avatar" />
          </div>
          <div className="character-info">
            <pre>
              <u>Name:</u> {state.name}
            </pre>
            <pre>
              <u>Species:</u> {state.species}
            </pre>
            <pre>
              <u>Status:</u> {state.status}
            </pre>
            <pre>
              <u>Type:</u>{" "}
              {state.type ? state.type : "No information available"}
            </pre>
            <pre>
              <u>Gender:</u> {state.gender}
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
