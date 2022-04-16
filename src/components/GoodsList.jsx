import React from 'react';
import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
    const { goods = [], addToBasket } = props;


    if(!goods.length){
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem addToBasket={addToBasket} key={item.id} {...item} />
            ))}
        </div>
    );
};

export default GoodsList;