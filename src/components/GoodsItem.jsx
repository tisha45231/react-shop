import React from 'react';

const GoodsItem = (props) => {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket,
    } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background}/>

            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button onClick={() => addToBasket({
                    id,
                    name,
                    price,
                })} className="btn">Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price} UAH</span>
            </div>
        </div>
    );
};

export default GoodsItem;