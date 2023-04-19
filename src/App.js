import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from './components/Category/Category';
import Products from './components/Products/Products';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from "./utils/Context";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";

function App() {
    return (
        <BrowserRouter>
            <AppContext />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Category/:id" element={<Category />} />
                <Route path="/Products/:id" element={<SingleProduct />} />
                <Route path="/signup" element={<Signup />} />
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/brd" element={<SingleProduct />} />
            </Routes>
            <Newsletter />
            <Footer />
        </BrowserRouter>


    );
}

export default App;