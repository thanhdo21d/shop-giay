import "./SingleProduct.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa"
import RelatedProducts from './RelatedProducts/RelatedProducts';
import prod from '../../assets/shoe-store-product-images/p2 Air Jordan XXXVII Low PF/thumbnail.webp'
import Category from '../Home/Category/Category';
import "./SingleProduct.scss"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div  className="layout">
            <div className="single-product-page">
                <motion.div variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="left">
                    <img src={prod} alt="123" />
                </motion.div>
                <motion.div variants={fadeIn('left', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="right">
                    <span className="name"> Product Name</span>
                    <span className="price"> Price :<span className="text-red-500"> 599 $</span> </span>
                    <span className="desc leading-6"> <span className="text-slate-900">Air Jordan 4 Retro</span>  ‘Seafoam’hiện đã có sẵn tại <span className="text-slate-900">Sneaker ThanhDo Shop</span> với mức giá hấp dẫn, đừng bỏ lỡ cơ hội của mình nhé! Cập nhật nhanh nhất lịch ra mắt của các mẫu giày mới nhất và tin tức thời trang trong nước và trên thế giới bằng cách theo dõi Sneaker Daily trên Facebook hoặc Instagram.</span>
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
