import { MdClose } from "react-icons/md"
import cartItem from "../../../assets/shoe-store-product-images/p2 Air Jordan XXXVII Low PF/9cb30549-fe13-4998-ad7d-6c2876be3b5b.webp"
import "./CartItem.scss";
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={ cartItem} alt="1223"/>
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <MdClose className="close-btn" />

                 <div className="quanlity-buttons">
                            <span> - </span>
                            <span> 5 </span>
                            <span> + </span>
                </div>
                {/*  */}
                <div className="text pt-2 pl-2">
                    
                    <span>3</span>
                    <span>x</span>
                    <span className="lineHeight ">$ 789</span>

                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
