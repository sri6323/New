// props data from parent to child components
import "./Gamers.css"
import PropTypes from 'prop-types';
function Gamers(props){
    return(
        <div className="gamer">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Game:{props.game}</p>
        </div>
    );
}
// Now we are giving the specific variables of thatpartyicular type
Gamers.propTypes={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    game: PropTypes.string.isRequired,
}
export default Gamers;
