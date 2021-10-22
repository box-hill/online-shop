const { items }  = require("./items")

const ItemDetail = ({ match, cart, setCart }) => {
    const idItem = match.params.id;
    const itemFiltered = items.filter(item => item.id.toString(10) === idItem);

    const modifyCart = (modifyType, idItem) => {
        let cartCopy = [...cart];
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

    



    return (
        <div>
            <h1>Hello from ItemDetail!</h1>
            <div>{itemFiltered[0].itemName} </div>
            <div>{itemFiltered[0].price}</div>
            <button onClick={() => modifyCart('subtract', idItem)}>-</button>
            <button onClick={() => modifyCart('add', idItem)}>+</button> 
        </div>
    );
};

export default ItemDetail;