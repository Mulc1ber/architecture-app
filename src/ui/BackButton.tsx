import type React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Вернуться на шаг назад</button>
    </div>
  );
};
