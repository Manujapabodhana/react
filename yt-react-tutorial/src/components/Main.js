const name = 'manuja';
const position = 'se';

// ✅ Correct object declaration
const myObj = {
  name: `${name}`,
  position: `${position}`,
  city: "tangalle",
};

function Main({ children }) {
  // ✅ Destructuring city from myObj
  const { city } = myObj;

  return (
    <div>
      This is main components
      <ul>
        <li>{name}</li>
        <li>{position}</li>
        <li>{city}</li> {/* ✅ You can also use city directly here */}
        <li>ds</li>

        {/* ✅ Renders children passed from App */}
       
      </ul>
       {children}
    </div>
  );
}

export default Main;
