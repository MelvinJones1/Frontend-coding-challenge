import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");

  const navigate = useNavigate();

  // post api for Form submit
  const submit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !companyName) {
      alert("Please fill all the required fields");
      return;
    }

    const body = {
      name,
      email,
      phone,
      company: {
        name: companyName,
      },
    };
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        body,
      );
      /* 
      setName("");
      setEmail("");
      setPhone("");
      setCompanyName("");
      */
      console.log(response);
      alert("User added Successfully");
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mb-10">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <h2>Add User</h2>
            <div>
              <Link to={"/users"}> Display users</Link>
            </div>
          </div>
        </nav>
      </div>
      <form className="m-5 ">
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneInput"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="companyInput" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="companyInput"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => submit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
