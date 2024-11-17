import React, { Component } from "react";
import axios from "axios";

class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data);
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center text-white bg-info p-3">User List</h2>
        {this.state.persons.map((person, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body d-flex">
              <img
                src={person.picture.large}
                alt={person.name.first}
                className="rounded-circle mr-3"
                style={{ width: "100px", height: "100px" }}
              />
              <div>
                <h5>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h5>
                <p>User Name: {person.login.username}</p>
                <p>Gender: {person.gender}</p>
                <p>
                  Time Zone Description: {person.location.timezone.description}
                </p>
                <p>
                  Address:{" "}
                  {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}
                </p>
                <p>Email: {person.email}</p>
                <p>
                  Birth Date and Age:{" "}
                  {new Date(person.dob.date).toLocaleDateString()} (
                  {person.dob.age})
                </p>
                <p>
                  Register Date:{" "}
                  {new Date(person.registered.date).toLocaleDateString()}
                </p>
                <p>Phone#: {person.phone}</p>
                <p>Cell#: {person.cell}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;
