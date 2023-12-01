import React, { Component } from "react";

export default class Apage extends Component {
  state = {
    user: [],
  };

  componentDidMount() {
    fetchUser().then((users) => {
      this.setState;
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        A 페이지
        {users.map(({ name, url }) => (
          <div key={name}>
            <p>
              {name}, {url}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
