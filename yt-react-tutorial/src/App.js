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

      {/* Print "amila" 4 times */}
      {mydata.map((_, index) => {
        return <p key={index}>amila</p>;
      })}
    </>
  );
}

export default App;

