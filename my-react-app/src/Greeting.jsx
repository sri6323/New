//condition renderning ,here we can control rendered messages like we can do sho,hide,change components.
import "./Greeting.css"
import PropTypes from 'prop-types';
function Greeting(props){
    if(props.islogin){
        return(
            <p id="p1">Welcome to our shop, Mr.{props.username}</p>
        );
    }
    else{
        return(
            <p id="p2">Please login to shopping the products.</p>
        );
    }
}
//setting variable props
Greeting.propTypes={
    islogin: PropTypes.bool,
    username: PropTypes.string.isRequired,
};

export default Greeting;