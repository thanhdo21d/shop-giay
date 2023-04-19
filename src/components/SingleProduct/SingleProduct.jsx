import "./SingleProduct.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa"
import RelatedProducts from './RelatedProducts/RelatedProducts';
import prod from '../../assets/shoe-store-product-images/p2 Air Jordan XXXVII Low PF/thumbnail.webp'
import Category from '../Home/Category/Category';
import "./SingleProduct.scss"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { useState } from "react";
import { getALl, getId } from "../../api/products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const SingleProduct = () => {
    
    const [products, setProducts] = useState([])
    const {id} = useParams()
    const showItem = async () => {

        if (id) {
        const { data } = await getId(id)
            setProducts(data)
            console.log(data)
        }
    }
    useEffect(() => {
        showItem()
    },[])
    return <div className="single-product-main-content">
        
        <div className="layout">
            
            <div className="single-product-page">
                <motion.div variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="left">
                    <img src={products.image} alt="123" />
                </motion.div>
                <motion.div variants={fadeIn('left', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="right">
                    <span className="name"> { products.name}</span>
                    <span className="price"> Price :<span className="text-red-500"> { products.price}</span> </span>
                    <span className="desc leading-6"> <span className="text-slate-900">{products.description }</span>  </span>
                    <div className="cart-buttons">
                        <div className="quanlity-buttons">
                            <span> - </span>
                            <span> 5 </span>
                            <span> + </span>
                        </div>
                        <button className="add-to-cart  flex overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-70"><FaCartPlus size={20} /> ADD TO CART </button>
                    </div>
                    {/*  */}
                    <span className="divider" />
                    <div className="info-item">
                        <span className="text-bold "> Category:
                            <span className="pl-5"> JokeDan R1</span>

                        </span>
                        <span className="text-bold"> Share:
                            <span className="social-icon flex mt-5">
                                <FaFacebookF size={26} />
                                <FaTwitter size={26} />
                                <FaInstagram size={26} />
                                <FaLinkedinIn size={26} />
                                <FaPinterest size={26} />
                            </span>

                        </span>

                    </div>

                </motion.div>
            </div>
            <RelatedProducts />
        </div>
    </div>;
};

export default SingleProduct;
