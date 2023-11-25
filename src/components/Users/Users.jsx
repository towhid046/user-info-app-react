import User from "./../User/User";
import './Users.css'
const Users = () => {
  const users = [
    {
        id: 1,
      name: "Rizwan",
      age: 27,
      height: 7,
      imgURL: "https://picsum.photos/200",
    },
    {
        id: 2,
      name: "Rakib",
      age: 25,
      height: 5,
      imgURL: "https://picsum.photos/200",
    },
    {
        id:3,
      name: "Rkzeebon",
      age: 28,
      height: 6,
      imgURL: "https://picsum.photos/200",
    },
    {
        id: 4,
      name: "Hazzaz",
      age: 23,
      height: 4,
      imgURL: "https://picsum.photos/200",
    },
    {
        id: 5,
      name: "Shihab Ali",
      age: 29,
      height: 8,
      imgURL: "https://picsum.photos/200",
    },
  ];
  return (
    <>
      {/* <h3>{users.length}</h3> */}
      <div className="d_flex">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
export default Users;
