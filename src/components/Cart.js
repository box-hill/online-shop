import { Link } from 'react-router-dom';
const { items }  = require("./items");

const Cart = ({cart, setCart}) => {
    let cartCopy = [...cart];
    const modifyCart = (modifyType, idItem) => {
        const incrementItemToCart = () => {
            const cartFiltered = cart.filter(item => item.id.toString(10) === idItem);
            if( cartFiltered.length > 1 ){
                alert('Duplicate items with same id in cart.');
            }
            if( cartFiltered.length === 0 ) {
                console.log('item not found in cart, initialising item')
                cartCopy = cartCopy.concat({id: idItem, quantity: 1})
                setCart(cartCopy);
            }
            else {
                let newQuan = cartFiltered[0].quantity + 1;
                cartCopy = cartCopy.map(item => item.id.toString(10) === idItem ? {...item, quantity: newQuan} : item);
                setCart([...cart].map(item => item.id.toString(10) === idItem ? {...item, quantity: newQuan} : item));
            }
            console.log(cartCopy);
        }
        const decrementItemFromCart = () => { 
            const cartFiltered = cart.filter(item => item.id.toString(10) === idItem);
    
            if( cartFiltered.length > 1 ){
                alert('Duplicate items with same id in cart.');
            }
            if( cartFiltered.length === 0 ) {
                console.log('item not found in cart, therefore cannot be removed');
            }
            else {
                let newQuan = cartFiltered[0].quantity - 1;
                if( newQuan === 0 ) {
                    // completely remove item from array (instead of setting quantity: 0)
                    cartCopy = cartCopy.filter(item => item.id.toString(10) !== idItem);
                }
                else {
                    // else decrement quantity
                    cartCopy = cartCopy.map(item => item.id.toString(10) === idItem ? {...item, quantity: newQuan} : item);
                }
                setCart(cartCopy);
            }    
            console.log(cartCopy);
        }
        if( modifyType === 'add' ){
            incrementItemToCart();
        } else if( modifyType === 'subtract' ){
            decrementItemFromCart();
        } else if( modifyType === 'remove'){
            cartCopy = cartCopy.filter(item => item.id.toString(10) !== idItem);
            setCart(cartCopy);
        } else {alert('Invalid modify type was invoked')};
    }
    function ReturnEmptyCart() {
        console.log(cart.length)
        if( cart.length === 0 ){
            return (<h3>Your cart is empty. Try adding some items!</h3>)
        }
        else return null;
    }

    return (
        <div>
            {ReturnEmptyCart()}
            <div>
            {cart.map(item => {
                let itemId = item.id;
                // get information of item attributes based on id
                let matchedItem = items.filter(item => item.id === itemId);
                if( matchedItem.legnth === 0) {
                    alert('Item ID could not be found.');
                }
                matchedItem = matchedItem[0];
                return (
                <div key={item.id} >
                <Link to={`/shop/${item.id}`} > 
                    <div>{matchedItem.itemName}</div>
                    <div>{item.quantity}</div>
                    <div>{items.filter(item => item.id === itemId).itemName}</div>
                </Link>
                <button onClick={() => modifyCart('subtract', itemId)}>-</button>
                <button onClick={() => modifyCart('add', itemId)}>+</button>
                <button onClick={() => modifyCart('remove', itemId)}>Remove</button>
                </div>)
            })}
            </div>
        </div>
    );
};

export default Cart;