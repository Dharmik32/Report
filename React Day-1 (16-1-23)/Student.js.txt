import React from 'react';

function Student(props) {
  // console.log(props.name);
  return (
    <div style={{ backgroundColor: 'skyblue', margin: 10 }}>
      <h1>Hello {props.name}</h1>
      <h2>Email {props.email}</h2>
    </div>
  );
}

export default Student;
