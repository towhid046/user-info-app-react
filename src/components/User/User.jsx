/* eslint-disable react/prop-types */
import './User.css'
const  User = ({user}) => {
  const { name, age, height, imgURL } = user;
  return (
    <>
      <div className="user_card">
        <img src={imgURL} alt="" />
        <h1>Name: {name}</h1>
        <p>Age: {age}</p>
        <p>Height: {height}</p>
      </div>
    </>
  );
}

export default User;