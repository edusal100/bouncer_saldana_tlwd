import { Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import CartContextProvider from "./Components/CartContext";
import FormBuyer from "./Components/FormBuyer";


function App() {
  return (
    <CartContextProvider>
    <div className="p-6 lg:px-16">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:idCategory" element= {<ItemListContainer/>}/>
        <Route exact path="/item/:idProduct" element= {<ItemDetailContainer/>}/>
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/checkout" element={<FormBuyer />}
						/>	   
      </Routes>
    </div>
    </CartContextProvider>
  );
}

export default App;
