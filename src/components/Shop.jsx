import React, {useState, useEffect} from 'react';
import {API_KEY, API_URL} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }
        setAlertName(item.name);
    }

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder);
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId){
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            }else{
                return el;
            }
        })
        setOrder(newOrder);
    }

    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId){
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0? newQuantity : 0
                }
            }else{
                return el;
            }
        })
        setOrder(newOrder);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: 'b1036bbb-be62e965-f85a8fe6-9d3c4535',
            }
        })
            .then(response => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false)
            })
    }, [])

    return (
        <main className="container content">
            <Cart
                handleBasketShow={handleBasketShow}
                quantity={order.length}

            />
            {
                loading ?
                    <Preloader/>
                    : <GoodsList addToBasket={addToBasket} goods={goods}/>
            }
            {
                isBasketShow &&
                <BasketList decQuantity={decQuantity} incQuantity={incQuantity} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} order={order}/>
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    );
};

export default Shop;