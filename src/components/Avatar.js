import "./Avatar.css";
const Avatar = (props) => {
  const pictureSize = props.size !== "" ? `is-${props.size}` : "";
  return (
    <picture className={pictureSize}>
      <img src={props.path} alt="avatar" />
      <strong>{props.name}</strong>
    </picture>
  );
};

export default Avatar;
