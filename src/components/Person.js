import { useState } from "react";
import React from "react";

const Person = (props) => {
  const [age, setAge] = useState(props.age);
  console.log(props.index);
  return (
    <div>
      My name is {props.name}. I am {age}. I am living in {props.city}
      <button onClick={(e) => console.log(e.target.id)}>Delete</button>
    </div>
  );
};

export default Person;
