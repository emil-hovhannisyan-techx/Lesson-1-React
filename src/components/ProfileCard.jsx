const ProfileCard = ({
  name = "Sauron",
  title = "Mairon, greatest servant of Melkor",
  imageUrl = "/images/sauron.jpeg",
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>{title}</p>
    </div>
  );
};

export default ProfileCard;
