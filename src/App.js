import Header from "./component/Header";
import Homepage from "./component/Pages/Homepage";
import Footer from "./component/Pages/Footer"
import {RecoilRoot} from 'recoil';
import { Routes, Route } from 'react-router-dom';
import Catalogue from "./component/Pages/Catalogue";
import Contact from "./component/Pages/Contact"
import Plant from "./component/Pages/Plant";


function App() {
  return (
    <RecoilRoot>
    <div className="App 2xl:w-5/6 xl:mx-auto">
      <Routes>
          <Route path="/" exact element={ <Homepage /> } />
          <Route path="/catalogue" exact element={ <Catalogue /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/catalogue/:id" element={<Plant />}  />
      </Routes>
      <Footer />
    </div>
    </RecoilRoot>

  );
}

export default App;
