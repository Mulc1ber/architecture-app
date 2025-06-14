import { useLocation } from "react-router-dom";
import { ConvertDate } from "../../utils";
import { BackButton } from "../../ui";
import TV from "../../assets/tv.svg";

interface EpisodeState {
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export const CardEpisode = () => {
  const location = useLocation();
  const state = location.state as EpisodeState;

  return (
    <div className="card-container">
      <BackButton />

      <div>
        <div className="episode-card">
          <div className="episode-image">
            <img src={TV} alt={state.name} className="avatar" />
          </div>
          <div className="episode-info">
            <pre>
              <u>Name:</u> {state.name}
            </pre>
            <pre>
              <u>Air date:</u> {state.air_date}
            </pre>
            <pre>
              <u>Episode:</u> {state.episode}
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
