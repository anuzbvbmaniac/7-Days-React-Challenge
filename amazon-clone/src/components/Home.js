import React from 'react';
import '../assets/css/Home.css'
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/images/photos/landingpage/APH_memories-delivered_family-photo_hero_1x._TTH_.jpg" alt="" className="home__image"/>

                <div className="home__row">
                    <Product
                        id={2}
                        title="Mario Kart 8 Deluxe - Nintendo Switch"
                        price={43.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/515IAQsQGjL._AC_US218_.jpg'
                        rating={5}
                    />
                    <Product
                        id={3}
                        title="Super Smash Bros. Ultimate - Nintendo Switch"
                        price={42.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/513ttWDr7eL._AC_US218_.jpg'
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={4}
                        title="Alienware M17 Gaming Laptop, 17.3'', FHD, Intel Core i7-8750H, NVIDIA RTX 2060 6GB, 256GB SSD + 1TB Storage, 16GB RAM"
                        price={50.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71ozkbLL42L._AC_SX679_.jpg'
                        rating={4}
                    />
                    <Product
                        id={5}
                        title="Alienware M17 Gaming Notebook | 8th Gen Intel Core i7-8750H 6-Core | 17.3 Inch FHD 1920x1080 60Hz IPS | 16GB 2666MHz DDR4 RAM | 512GB SSD"
                        price={61.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81ik1NvLFAL._AC_SX679_.jpg'
                        rating={4}
                    />
                    <Product
                        id={1}
                        title="Alienware New M15 Gaming Laptop, 15.6'' 144hz FHD Display, Intel Core i7-9750H, NVIDIA RTX 2060 6GB, 512GB SSD, 16GB RAM, AWYA15-7947BLK-PUS"
                        price={157.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/71hhY4ikVwL._AC_SX679_.jpg'
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={6}
                        title="Samsung Business CH890 Series 34 inch WQHD 3440x1440 Ultrawide Curved Desktop Monitor for Business, 100 Hz, USB-C, HDMI, DP, 3 Year Warranty (LC34H890WJNXGO), Black, Model:LC34H890WJNXZA"
                        price={30.78}
                        image='https://images-na.ssl-images-amazon.com/images/I/71qkzkC7bHL._AC_SX679_.jpg'
                        rating={4}
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;
