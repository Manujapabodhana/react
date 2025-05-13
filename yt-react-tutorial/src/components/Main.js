function Main(props){
    return(
    <div>
        This is main components
        <ul>
            <li>dddd</li>
            <li>dddssd</li>
            <li>dsdd</li>
            <li>ds</li>
            {props.children}
        </ul>
        
    </div>);
}

export default Main;