import { Link } from 'react-router-dom';
const { items }  = require("./items");

const Cart = (cart, setCart) => {
    
    console.log(cart.cart);
    return (
        <div>
            <h1>Hello from Cart!</h1>
            <div>
            {cart.cart.map(item => {
                let itemId = item.id;
                // get information of item attributes based on id
                let matchedItem = items.filter(item => item.id === itemId);
                if( matchedItem.legnth === 0) {
                    alert('Item ID could not be found.');
                }
                matchedItem = matchedItem[0];

                return (
                <div key={item.id} ><Link to={`/shop/${item.id}`} > 
                <div>{matchedItem.itemName}</div>
                <div>{item.quantity}</div>
                <div>{items.filter(item => item.id === itemId).itemName}</div>

                </Link></div>)
            })}
            </div>
        </div>
    );
};

export default Cart;