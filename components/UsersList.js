// src/components/UserList.jsx
import React from 'react';

class UsersList extends React.Component {
  state = { users: [], loading: true };

  componentDidMount() {
    console.log('Component mounted');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data, loading: false });
        console.log('Data fetched');
      });
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;

    return (
      <div>
        <h1>User List</h1>
        <ul>
          {this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
