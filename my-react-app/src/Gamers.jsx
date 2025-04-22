import "./Gamers.css"
function Gamers(props){
    return(
        <div className="gamer">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Game:{props.game}</p>
        </div>
    );
}
export default Gamers;