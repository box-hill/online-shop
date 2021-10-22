import '../App.css';
import { Link } from 'react-router-dom';


const Nav = ({cart, setItems}) => {
    return (
        <nav>
            <ul className='nav-links'>
                <Link to="/"> <li>Home</li> </Link>
                <Link to="/shop"> <li>Shop</li> </Link>
                <Link to="/cart"> <li>Cart ({cart.length})</li> </Link>
            </ul>
        </nav>
    );
};

export default Nav;