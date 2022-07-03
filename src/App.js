import { Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import CartContextProvider from "./Components/CartContext";

function App() {
  return (
    <CartContextProvider>
    <div className="py-8 px-6 lg:px-16">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:idCategory" element= {<ItemListContainer/>}/>
        <Route exact path="/item/:idProduct" element= {<ItemDetailContainer/>}/>
        <Route exact path="/cart" element={<Cart/>} />   
      </Routes>
    </div>
    </CartContextProvider>
  );
}

export default App;
