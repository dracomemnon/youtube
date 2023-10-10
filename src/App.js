import { useState } from "react"

const Hi = (props) => {
  const {num} = props;
  return (
    <div>Hi there {num}.</div>
  )
}

function App() {

  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1)
  }
  
  return (
    <div className="App">
       <Hi num = {number} />
       <div>Number={number}</div>
       <button onClick = {add}>Add</button>
    </div>
  );
}

export default App;
