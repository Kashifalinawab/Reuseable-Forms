import React from "react";
import useStateContext from "../hooks/useStateContext";
import { useNavigate, Link } from "react-router-dom";

function HomePage(props) {
  const { formData } = useStateContext();
  const navigate = useNavigate();

  // console.log(formData);

  const updateEvnt = (id) => {
    // console.log(id);
    // navigate("/detialspage")
  };
  const deleteEvnt = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div>
        <div>
          <h1>Welcome To Form Fill Page</h1>
          <h3>Please Click Below to fill the form</h3>
          <button
            onClick={() => {
              navigate("/detialspage");
            }}
          >
            Click Here
          </button>
        </div>
        <br />
        <br />
        <br />
        <div>
          <table style={{ border: "1px double blue" }}>
            <tbody>
              <tr>
                <th>
                  <label>ID </label>
                </th>
                <th>
                  <label>NAME </label>
                </th>
                <th>
                  <label>SURNAME </label>
                </th>
                <th>
                  <label>NUMBER </label>
                </th>
                <th>
                  <label>AGE </label>
                </th>
                <th>
                  <label>EMAIL </label>
                </th>
              </tr>
              {formData.map((info) => {
                return (
                  <tr key={info.id}>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.surname}</td>
                    <td>{info.number}</td>
                    <td>{info.age}</td>
                    <td>{info.email}</td>
                    <td>
                      <Link to={`/detialspage/${info.id}`}>
                        <button onClick={() => updateEvnt(info.id)}>
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => deleteEvnt(info.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
