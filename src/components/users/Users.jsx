import React, { Component } from "react";
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
    if(loading){
        return <Spinner></Spinner>
    } else {
        return (
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
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
}

export default Users;
