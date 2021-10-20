const { items }  = require("./items")

const ItemDetail = ({ match }) => {
    console.log(match.params.id);
    return (
        <div>
            <h1>Hello from ItemDetail!</h1>
            <div>{items[match.params.id].itemName} </div>
            
        </div>
    );
};

export default ItemDetail;