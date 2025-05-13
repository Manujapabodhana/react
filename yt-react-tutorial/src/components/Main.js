const name = 'manuja';
  const position = 'se';

  class myObj ={
    name:`${name}`,
    position:`${position}`,
  };


function Main(props) {
  

  return (
    <div>
      This is main components
      <ul>
        <li>{myObj.name}</li>
        <li>{myObj.position}</li>
        <li>dsdd</li>
        <li>ds</li>

        {/* 👇 This will render whatever is passed from <Main> in App.js */}
        {props.children}
      </ul>
    </div>
  );
}

export default Main;
