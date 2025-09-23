import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Random",
        type: "Default",
      },
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.github.com/users/Sankaranarayanankm"
      );
      if (!response.ok) {
        throw new Error("Failed to get user details");
      }
      const resData = await response.json();
      this.setState({
        userInfo: resData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { login, type } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Location: {type}</h3>
        <h4>Contact: @akshaisaini</h4>
      </div>
    );
  }
}

export default UserClass;
