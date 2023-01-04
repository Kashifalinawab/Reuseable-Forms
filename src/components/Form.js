import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import useStateContext from "../hooks/useStateContext";

function Forms(props) {
  const { formData, setFormData } = useStateContext();
  const { data } = props;
  console.log(data);
  const { id } = useParams();

  // const newData = data.filter((Id) => id === Id);
  // console.log("newData",newData);

  

  const [formvalue, setFormvalue] = useState(
    data
      ? {
          id: data[0].id,
          name: data[0].name,
          surname: data[0].surname,
          number: data[0].number,
          age: data[0].age,
          email: data[0].email,
        }
      : {
          id: "",
          name: "",
          surname: "",
          number: "",
          age: "",
          email: "",
        }
  );
  // const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const submitEvent = (e) => {
    e.preventDefault();
    console.log(formvalue);
  };
  const submitData = (id) => {
    setFormData((prev) => [...prev, formvalue]);
    const newData = data.find((Id) => Id === id);
    console.log("newData",newData);
  };
  console.log("array of object data ", formData);
  return (
    <div>
      <h2>Filled the form</h2>
      <form onSubmit={submitEvent}>
        <table>
          <tbody>
            <tr>
              <th>
                <label>ID </label>
              </th>
              <td>
                <label>:= </label>
              </td>
              <td>
                <input
                  type="text"
                  name="id"
                  value={formvalue.id}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Name </label>
              </th>
              <td>
                <label>:= </label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formvalue.name}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Surname </label>
              </th>
              <td>
                <label>:= </label>
              </td>
              <td>
                <input
                  type="text"
                  name="surname"
                  value={formvalue.surname}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Number </label>
              </th>
              <td>
                <label>:= </label>
              </td>
              <td>
                <input
                  type="text"
                  name="number"
                  value={formvalue.number}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Age </label>
              </th>
              <td>
                <label>:= </label>
              </td>
              <td>
                <input
                  type="text"
                  name="age"
                  value={formvalue.age}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email </label>
              </th>
              <td>
                <label>:= </label>
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={formvalue.email}
                  required
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <Link to="/">
          <button type="submit" onClick={() => submitData(formvalue.id)}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Forms;
