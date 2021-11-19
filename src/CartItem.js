import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

    decreaseQuantity(){
        this.state.qty -= 1;
    }
    render(){
        return(
            <div className="cart-item">
                <div className = "left-block">
                    <img style = {style.images}/>
                </div>
                <div className = "right-block">
                    <div>{this.state.title}</div>
                    <div>Rs {this.state.price}</div>
                    <div>Qty: {this.state.qty}</div>
                    <div className = "cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
                            onClick={this.decreaseQuantity.bind(this)}
                        />
                        <img 
                            alt="deccrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/3395/premium/3395538.png?token=exp=1637307265~hmac=15532b778a4b0adc7f6d5c5ec8d15627"
                        />
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