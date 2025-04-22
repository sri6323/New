import"./Header.css";
function Header(){
    return(
        <div className="main">
            <h1>My Activities</h1>
            <nav>
                <ul>
                    <li><a href="#1">Home</a></li>
                    <li><a href="#2">Product</a></li>
                    <li><a href="#3">Shopping</a></li>
                    <li><a href="#4">About Us</a></li>
                </ul>
                <hr />
            </nav>
        </div>
    );
}
export default Header;