import type React from "react";
import { lazy } from "react";
import { useParams } from "react-router-dom";

type CardElementParams = {
  name: "character" | "location" | "episode";
  id: string;
};

const CardCharacter = lazy(() =>
  import("./CardCharacter").then((module) => ({
    default: module.CardCharacter,
  }))
);
const CardLocation = lazy(() =>
  import("./CardLocation").then((module) => ({ default: module.CardLocation }))
);
const CardEpisode = lazy(() =>
  import("./CardEpisode").then((module) => ({ default: module.CardEpisode }))
);

export const CardElement: React.FC = () => {
  const params = useParams<CardElementParams>();

  return (
    <>
      {params.name === "character" ? (
        <CardCharacter />
      ) : params.name === "location" ? (
        <CardLocation />
      ) : (
        <CardEpisode />
      )}
    </>
  );
};
