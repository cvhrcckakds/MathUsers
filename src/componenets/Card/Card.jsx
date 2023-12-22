import "./Card.css";

export default function Card({ personInfo }) {
  const { user_photo, first_name, last_name, user_mail, gender } = personInfo;
  const cardStyle={
    backgroundColor:
      gender === "Female"
        ? "pink"
        : gender === "Male"
        ? "blue"
        : "orangered",
  }
  return (
    <div
      className="card"
      style={cardStyle}
    >
      <img src={user_photo} alt="" />
      <div>
        <h5>{first_name + " " + last_name}</h5>
        <p>{user_mail}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
}
