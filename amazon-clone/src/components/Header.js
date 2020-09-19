import React from 'react';
import '../assets/css/Header.css'
import { Search, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { useStateValue } from "../context/StateProvider";
import { auth } from '../config/firebase';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo"
                     alt="Amazon Logo"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <Search className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">{user ? 'Sign In' : 'Sign Out'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasket className=""/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
