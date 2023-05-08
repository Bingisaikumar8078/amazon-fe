import React ,{Component,createContext} from "react";
export const CartContext = createContext();


class CartContextProvider extends Component{
    constructor(props){
        super(props);
        let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
        let cardAmount=existingCart.length;
        this.state = { 
            item: existingCart,
            size: cardAmount,
            increment: (value) =>{
                let itemList = this.state.item;

                itemList.push(value);

                this.setState({item: itemList})
                this.setState({size: this.state.item.length})
                this.state.saveToLocalCache();
            },
//             decrement: (value) =>{
// let itemList = this.state.item;
// delete itemList[0];

// this.setState({item: itemList})
// this.setState({size: this.state.item.length})
//             },
            saveToLocalCache: ()=>{
                localStorage.setItem('myCart', JSON.stringify(this.state.item));
            }
        }

        
    }   
    render(){
        return (
                
            <CartContext.Provider value={{...this.state,...this.increment}}>
                {this.props.children}
            </CartContext.Provider>

        

        );
        
    }
}

export default CartContextProvider;