
import React from 'react';
import './Header.css';
import AIRecommendation from '../AIRecommendation/AIRecommendation';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2> 24*7 Delivery</h2>
                <h2>Order Your Favourite Food Here</h2>
                <p>Hungry for crispy pizzas, sizzling burgers, or cozy homemade meals? Whether it’s midnight munchies or a gourmet feast, we’ve got your cravings covered.</p>
                <div className="header-buttons">
                    <button>View Menu</button>
                    <AIRecommendation />
                </div>
            </div>
        </div>
    )
}

export default Header;