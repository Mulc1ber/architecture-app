import { Avatar, Button, Tooltip } from "@mantine/core";

interface UserProfileProps {
  userName: string;
  onClick: () => void;
  btnText: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userName,
  onClick,
  btnText,
}) => {
  return (
    <span className="user-profile">
      <Tooltip label={userName} color="gray">
        <Avatar radius="xl" color="blue">
          {userName.slice(0, 1).toUpperCase()}
        </Avatar>
      </Tooltip>
      <Button
        variant="outline"
        color="gray"
        size="md"
        radius="md"
        onClick={onClick}
      >
        {btnText}
      </Button>
    </span>
  );
};
