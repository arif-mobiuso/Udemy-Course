import React  from "react";
import {Routes , Route} from "react-router-dom" ;
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import OrderSummary from "./OrderSummary";
import NoMatch from "./NoMatch";
import Products from "./Products";
import FeaturedProduts from "./FeaturedProduts";
import NewProducts from "./NewProducts";
import DataFetching from "./DataFetching";
import Counter from "./Counter";
function App(){
    return(
        <>
        <Navbar></Navbar>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="about"  element={<About/>}/>
            <Route path="orderSummary"  element={<OrderSummary/>}/>
            <Route path="*"  element={<NoMatch/>}/>
            <Route path="products"  element={<Products/>}> 
                <Route index element={<FeaturedProduts/>}></Route>
                <Route path="featured" element={<FeaturedProduts/>}></Route>
                <Route path="new" element={<NewProducts/>}></Route>
            </Route>
            <Route path="fetch" element={<DataFetching/>}></Route>
            <Route path="counter" element={<Counter/>}></Route>

        </Routes>

        </>
    );
}
export default App;
