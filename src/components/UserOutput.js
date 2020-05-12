import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
             <p>My name is {props.name}</p>
             <p>{props.children}</p>
        </div>
    )
}

export default UserOutput;