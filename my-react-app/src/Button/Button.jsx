import "./Button.css";
// here we will inline css
function Button(){
    // This is an javascript object 
    const styles={
        backgroundColor: "aqua",
        color: "white",
        padding:" 10px 20px",
        borderRadius: "22px",
        border: "1px solid black",
        cursor: "pointer",
    }
    return(
        <div>
        <button className="bt">
            Click Me!
        </button>
        <button style={styles}>
            Click Me 111
        </button>
        </div>
    );
}
export default Button;