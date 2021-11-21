import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            Products: [
                {
                    price: 99,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Watch',
                    qty: 10,
                    img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/42-alu-space-sport-black-nc-1up?wid=940&hei=1112&fmt=png-alpha&.v=1594318651000',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
                
            ]
        }
    } 

    render(){
        const {Products} = this.state;
        return(
            <div className="cart">
                {Products.map((product) => {
                    return <CartItem product = {product} key={product.id} />
                })}
            </div>
        )
    }
}

export default Cart;