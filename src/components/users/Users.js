import React, { Component } from 'react';
import UserItem from './UserItem';
class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      },

      {
        id: 26,
        login: 'topfunky',
        avatar_url: 'https://avatars3.githubusercontent.com/u/26?v=4',
        html_url: 'https://github.com/topfunky'
      },
      {
        id: 25,
        login: 'caged',
        avatar_url: 'https://avatars3.githubusercontent.com/u/25?v=4',
        html_url: 'https://github.com/caged'
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '3px'
};

export default Users;
