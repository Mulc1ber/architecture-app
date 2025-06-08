import type React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1>Not Found</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
};
