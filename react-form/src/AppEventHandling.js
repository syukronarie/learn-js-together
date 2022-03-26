import React, { Component } from "react";
import CONST from "./utils/constant";

// Stateless
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: CONST.teams,
    };
    this.updateData = this.updateData.bind(this);
    this.delete = this.delete.bind(this);
  }

  updateData(newUser, e) {
    e.preventDefault();
    this.setState((state) => ({
      users: [...state.users, { id: ++state.users.length, ...newUser }],
    }));
  }

  delete(id) {
    if (id) {
      const tempUserList = [...this.state.users];
      const newUserList = tempUserList.filter((data) => data.id !== id);

      this.setState(() => ({
        users: [...newUserList],
      }));
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <InputNewUser update={this.updateData} />
        <UserList users={this.state.users} delete={this.delete} />
      </div>
    );
  }
}

export class InputNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
    };

    let fromData = new FormData(e.target);
    const firstName = fromData.get("firstName");
    const lastName = fromData.get("lastName");
    const email = fromData.get("email");
    const gender = fromData.get("gender");

    Object.assign(newUser, {
      firstName,
      lastName,
      email,
      gender,
    });

    this.props.update(newUser, e);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <label htmlFor="firstName">First name</label>
        <input id="firstName" type="text" name="firstName" />
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" type="text" name="lastName" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="gender">Gender</label>
        <select id="gender" type="select" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    );
  }
}

export class UserList extends Component {
  render() {
    let users = this.props.users ?? [];
    return users.length > 0 ? (
      users.map((val) => (
        <div key={val.id}>
          <h3>
            Fullname: {val.firstName} {val.lastName}
          </h3>
          <p>Email: {val.email}</p>
          <p>Gender: {val.gender}</p>
          <button onClick={() => this.props.delete(val.id)}>Delete</button>
        </div>
      ))
    ) : (
      <h3>We dont have users yet</h3>
    );
  }
}
