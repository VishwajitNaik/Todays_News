import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '0 10px',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const titleStyle = {
    marginTop: '20px',
    fontSize: '24px',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1>
          <Link to="/login" style={buttonStyle}>
            Log In
          </Link>
          <Link to="/signup" style={buttonStyle}>
            Sign Up
          </Link>
        </h1>
      </div>
      <br />
      <br />
      <br />

      <h2 style={titleStyle}>
        {props.name ? `Welcome - ${props.name}` : "Please log in"}
      </h2>

      <div>
        <h2 style={titleStyle}>Breaking News</h2>
        {/* Include your breaking news content here */}
      </div>
    </div>
  );
};

export default Home;
