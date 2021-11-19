import React from "react";

class CartItem extends React.Component {
    render(){
        return(
            <div className="cart-item">
                <div className = "left-block">
                    <img style = {style.images}/>
                </div>
                <div className = "right-block">
                    <div>Phone</div>
                    <div>Rs 999</div>
                    <div>Qty: 1</div>
                    <div className = "cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    images : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#CCC'
    }
}

export default CartItem;