import React from "react";
import "./App.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.jenisKelamin = props.gender;
    this.state = {
      umur: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.age !== this.props.age) {
      this.setState({ umur: this.props.age });
    }
  }

  componentWillUnmount() {
    console.log("hello from componentWillUnmount()");
  }

  render() {
    return (
      <div>
        <p>and his age is {this.state.umur}</p>
        <p>and his gender is {this.jenisKelamin}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Arie",
      lastName: "Syukron",
      age: null,
      gender: "male",
      hide: false,
    };
    this.changeNameToWibowo = this.changeNameToWibowo.bind(this);
    this.resetName = this.resetName.bind(this);
    this.addAge = this.addAge.bind(this);
    this.hidePrivateInfo = this.hidePrivateInfo.bind(this);
  }

  changeNameToWibowo() {
    this.setState({ lastName: "Wibowo" });
  }

  resetName() {
    this.setState({ lastName: "Syukron" });
  }

  addAge() {
    this.setState({ age: 20 });
  }

  hidePrivateInfo() {
    this.setState({ hide: true });
  }

  componentDidMount() {
    console.log("one => this from componentDidMount()");
  }

  render() {
    console.log("One => this from render");
    return (
      <div>
        <p>{this.state.firstName + " " + this.state.lastName}</p>
        {!this.state.hide ? <Profile age={this.state.age} gender={this.state.gender} /> : null}
        <button onClick={this.changeNameToWibowo}>Change Last Name</button>
        <button onClick={this.resetName}>Reset Last Name</button>
        <button onClick={this.addAge}>Add Age</button>
        <button onClick={this.hidePrivateInfo}>Hide Private Info</button>
      </div>
    );
  }
}

export default App;
