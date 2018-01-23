// let Header = React.createElement("h1",null,"This is the Header");

function Header(props) {
    return (
        <div className="header">
            {props.title}

            <h1>This is the Header<input/><button>This is my button</button></h1>
            <div>sub Header</div>

        </div>
    )
}