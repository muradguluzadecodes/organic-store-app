/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import "../UserInfo/UserInfo.scss";

export default function UserInfo({ image, userName }) {
  return (
    <div className="user-info">
      <img src={image} alt="client avatar" className="user-info__avatar" />
      <p className="user-info__name">{userName}</p>
    </div>
  );
}
