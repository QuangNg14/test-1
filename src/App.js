import { useEffect, useState } from "react";
import Person from "./components/Person";

const data = [
  {
    index: 0,
    name: "Quang",
    age: 21,
    city: "NYC",
  },
  {
    index: 1,
    name: "A",
    age: 20,
    city: "NYC",
  },
  {
    index: 2,
    name: "B",
    age: 19,
    city: "NYC",
  },
  {
    index: 3,
    name: "C",
    age: 18,
    city: "NYC",
  },
]; //array

const App = () => {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState(0);
  const [personData, setPersonData] = useState(data);

  const deleteThisItem = (index) => {
    setPersonData(personData.filter((person) => person.index != index));
  };

  return (
    <div className="App">
      {/* <div>Count: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button> */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        onClick={() => {
          // setPersonData(
          //   personData.concat([
          //     {
          //       name,
          //       city,
          //       age,
          //     },
          //   ])
          // );

          setPersonData([
            ...personData,
            { name, age, city, index: personData.length },
          ]);
        }}
      >
        Add new person
      </button>
      {personData.map((person) => {
        return (
          <Person
            index={person.index}
            name={person.name}
            age={person.age}
            city={person.city}
            deleteThisItem={deleteThisItem}
          />
        );
      })}
    </div>
  );
};

export default App;
