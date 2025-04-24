//condition renderning ,here we can control rendered messages like we can do sho,hide,change components.
import "./UserGreeting.css"
import PropTypes from 'prop-types';
function UserGreeting(props){
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
UserGreeting.PropTypes={
    islogin: PropTypes.bool,
    username: PropTypes.string,
};
UserGreeting.defaultprops = {
    islogin: true,
    username:"Guest",
}
export default UserGreeting;