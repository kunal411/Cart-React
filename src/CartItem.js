import React from "react";

class CartItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    // } 

    decreaseQuantity = () => {
        if(this.state.qty == 0){
            return;
        }
        // this.state.qty -= 1;
        // Set state form 1
        // this.setState({
        //     qty: this.state.qty - 1
        // });

        // Set state form 2 - if previous state is required
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        });
    }

    increaseQuantity = () => {
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        });
    }
    render(){
        const {qty, price, title, img} = this.props.product;
        return(
            <div className="cart-item">
                <div className = "left-block">
                    <img src={img} style = {style.images}/>
                </div>
                <div className = "right-block">
                    <div>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qty: {qty}</div>
                    <div className = "cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="deccrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                            onClick={this.increaseQuantity}
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
        height: 180,
        width: 160,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black'
    }
}

export default CartItem;