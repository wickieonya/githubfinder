import React, { Component } from "react";
import UserItem from './UserItem';

const Users = ({ users, loading }) =>
    <div style={userStyle}>
        {users.map(user => (
            <UserItem
                key={user.id}
                login={user.login}
                avatar_url={user.avatar_url}
                html_url={user.html_url}
            />
        ))}
    </div>

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
}

export default Users;
