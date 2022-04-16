import React from 'react';

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket,
        decQuantity, incQuantity
    } = props;
    return (
        <li className="collection-item ">{name}
            <i
                className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i>
            x{quantity}
            <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i> = {price * quantity} UAH
            <span
                onClick={() => removeFromBasket(id)}
                className="secondary-content"><i
                className="material-icons basket-delete">close</i></span></li>
    );
}


export default BasketItem;