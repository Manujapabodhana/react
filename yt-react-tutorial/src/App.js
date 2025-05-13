import './App.css';
import Main from './components/Main';

const mydata = [
  {
    name: 'amila',
    city: 'tangalle',
    position: 'web develop',
  },
  {
    name: 'upul',
    city: 'tangalle',
    position: 'web develop',
  },
  {
    name: 'kumara',
    city: 'galle',
    position: 'web develop',
  },
  {
    name: 'nimal',
    city: 'matara',
    position: 'app develop',
  },
];

function App() {
  return (
    <>
      <div>
        AUK learning
        <h1>amila</h1>
      </div>

      <p>amila upul</p>

      {/* ❌ This is removed:
      {mydata.map((ele, index) => (
        <Main
          key={index}
          name={ele.name}
          city={ele.city}
          position={ele.position}
        >
          <li><b>Child item for: {ele.name}</b></li>
        </Main>
      ))} 
      */}
    </>
  );
}

export default App;
