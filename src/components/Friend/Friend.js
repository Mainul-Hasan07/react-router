import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Friend = (props) => {
    console.log(props);
    const {id, name, phone, website, address } = props.friend;

    const history = useHistory();

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: "10px"
    }
    
    const handleClick = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h2>I am : {name}</h2>
            <h5>Call Me : {phone}</h5>
            <p>Visit me : {website}</p>
            <p>I live in : {address.city}</p>
            <Link to={`/friend/${id}`}>Visit me</Link>
            <br />
            <Link to={`/friend/${id}`}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleClick}>Read me</button>
            
        </div>
    );
};

export default Friend;