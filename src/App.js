
import {Button} from 'antd'
import {useState } from 'react'
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <h1>COUNTER</h1>
      <h1>{ count }</h1>
     <div>
     <Button type="primary"
      onClick={ () => setCount(count + 1)}
      >Count +</Button>
      <Button type="primary" onClick={ () => setCount(count - 1)}>
      Count-
      </Button>
      <Button type="primary" onClick={ () => setCount(0)}>Reset</Button>
     </div>
    </div>
  );
}

export default App;
