import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const display = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        console.log(response);

        setUserData(response.data); // Correct key
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    display();
    console.log(userData);
  }, []);

  if (!userData) return <div>Loading...</div>;

  const deleteUser = async (id) => {
    try {
      const resp = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
    } catch (error) {
    } finally {
      const updatedData = userData.filter((u) => u.id != id);
      setUserData(updatedData);
    }
  };

  return (
    <div>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <h2>View Users</h2>

            <div>
              <Link to={"/add-user"}> Add user</Link>
            </div>
          </div>
        </nav>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
              <td>
                <button
                  style={{ color: "white", backgroundColor: "red" }}
                  onClick={() => deleteUser(user.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
