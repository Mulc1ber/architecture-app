import type React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="outline"
        color="gray"
        size="md"
        radius="md"
        onClick={() => navigate(-1)}
      >
        Вернуться на шаг назад
      </Button>
    </div>
  );
};
