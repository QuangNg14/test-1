import Person from "./components/Person";

const data = [
  {
    name: "Quang",
    age: 21,
    city: "NYC",
  },
  {
    name: "A",
    age: 20,
    city: "NYC",
  },
  {
    name: "B",
    age: 19,
    city: "NYC",
  },
  {
    name: "C",
    age: 18,
    city: "NYC",
  },
]; //array

const App = () => {
  const onClick = () => {
    console.log("click in App component");
  };
  return (
    <div className="App">
      {/* props */}
      {data.map((person) => {
        return (
          <Person name={person.name} age={person.age} city={person.city} />
        );
      })}
    </div>
  );
};

export default App;
