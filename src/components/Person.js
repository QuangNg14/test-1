import React from "react";

const Person = (props) => {
  return (
    <div onClick={props.onClick}>
      My name is {props.name}. I am {props.age}. I am living in {props.city}
    </div>
  );
};

export default Person;
