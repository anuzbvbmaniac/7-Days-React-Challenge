import React from 'react';
import '../assets/css/Checkout.css'
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../context/StateProvider";

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://m.media-amazon.com/images/G/01/shazam/1940x500-yktrz._V406576292_.jpg"
                     className="checkout__add" alt=""
                />
                <div>
                    <h2 className="checkout__title">Your Shopping basket.</h2>
                    {
                        basket.length !== 0
                            ? basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                            : <p className="checkout__subTitle">There are no Items in your basket. Please add some items to your basket.</p>
                    }
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout;
