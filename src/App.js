import { Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="py-8 px-6 lg:px-16">
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:idCategory" element= {<ItemListContainer/>}/>
        <Route exact path="/item/:idProduct" element= {<ItemDetailContainer/>}/>    
      </Routes> 

    </div>
  );
}

export default App;
