import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
function App(){
  return(
    <div className="main"> 
      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <hr />
      <Footer />
    </div>
  );
}
export default App;