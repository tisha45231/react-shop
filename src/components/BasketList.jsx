import React from 'react';
import BasketItem from "./BasketItem";

const BasketList = (props) => {
    const {order, handleBasketShow,decQuantity, incQuantity, removeFromBasket} = props


    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)


    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem decQuantity={decQuantity} incQuantity={incQuantity} removeFromBasket={removeFromBasket} key={item.id} {...item}/>
                )) : <li className="collection-item ">Корзина пуста</li>
            }
            <li className="collection-item">Общая стоимость: {totalPrice} UAH</li>
            <li className="collection-item"><button className=" btn btn-small">Оформить</button></li>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </ul>
    );
};

export default BasketList;