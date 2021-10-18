import data from './data.json'
import './App.css';

import GroceryData from './Components/GroceryData'

function App() {
  return (
    <div className="App">
            {data.map(el=>{
        return <GroceryData key={el.id} data1={el}/>
      })}
    </div>
  );
}

export default App;
