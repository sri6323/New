import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Gamers from "./Gamers.jsx";
import Greeting from "./Greeting.jsx"
function App(){
  return(
    <div className="main"> 
      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <Card />//
      <hr />
      <Button />
      <hr />
      <Gamers name="Raj" age={16} game="Dr.Driving"/>
      <Gamers name="Ram" age={16} game="Free Fire"/>
      <Gamers name="Rinku" age={18} game="PUBG"/>
      <Gamers />
      <hr />
      <Greeting  islogin={true} username={false}/>
      <Footer />
    </div>
  );
}
export default App;