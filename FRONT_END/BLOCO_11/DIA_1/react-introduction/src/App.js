import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = [
  'fazer o café da manhã',
  'lavar louça',
  'levar a cachorra pra passear'
]

function App() {
  return (
    <div className="App">
      <ol>
        {task('acordar')}
        {tasks.map((eachTask) => task(eachTask))}
      </ol>
      
    </div>
  );
}

export default App;
