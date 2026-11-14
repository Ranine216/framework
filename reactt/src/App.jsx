//import "./App.css"

//function App() {


  //return (
    //<>
      //<div className="app">
        //<h1
          //className="titre"
         // style={{
            //color: "orange",
            //textTransform: "uppercase",
         // }}
        //>
        //  hello 3 lig 3
        //</h1>
     // </div>
    //</>
 // )
//}

//export default App 



/*import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Destinations from "./components/destination/destinationS";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Destinations />
      </main>

      <Footer />
    </div>
  );
}

export default App;*/






import Header from "./components/header/header";
import Destinations from "./data/destinationlist";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Destinations />
      <Footer />
    </>
  );
}

export default App;

