import React from "react";
import { Loader } from "@mantine/core";

export const Loading: React.FC = () => {
  return (
    <div className="loading">
      <Loader size={40} />
      <h3>Loading</h3>
    </div>
  );
};
