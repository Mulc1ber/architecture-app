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
      <span className="user-name">{userName}</span>
      <button onClick={onClick}>{btnText}</button>
    </span>
  );
};
