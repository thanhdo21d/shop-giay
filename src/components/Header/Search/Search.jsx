import { MdClose } from "react-icons/md"
import cartItem from "../../../assets/shoe-store-product-images/p8 Air Jordan 1 Retro High OG/air-jordan-1-retro-high-og-shoes-Pz6fZ9.jpeg"

import "./Search.scss";
const Search = ({setShowSearch}) => {
    return <div className="search-model">
            <div className="form-model">
                <input type='text' autoFocus placeholder="Search for products" />
                <MdClose onClick={()=>setShowSearch(false)}/>
            </div>
        <div className="search-result-content">
            <div className="search-result">
                <div className="search-result-item">
                    <div className="img-container">
                <img src={ cartItem} alt="1223"/>
                    </div>
                    {/*  */}
                    <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="desc">Product desc</span>
            </div>
                    {/*  */}
                </div>
            </div>
        </div>
    </div>
};

export default Search;
