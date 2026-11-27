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





 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Accueil from "./components/acceuil/acceuil.jsx";
import Apropos from "./components/apropos/apropos.jsx";
import Login from "./components/login/login.jsx";
import Reservation from "./components/reservation/reservation.jsx";
import Destinations from "./data/destinationlist.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<h1 style={{ textAlign: "center", margin: 60 }}>Contact</h1>} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;