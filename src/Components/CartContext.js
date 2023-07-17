import React, { Component, createContext } from "react";
export const CartContext = createContext();

class CartContextProvider extends Component {
  constructor(props) {
    super(props);
    let existingCart =
      // eslint-disable-next-line eqeqeq
      localStorage.getItem("myCart") !=undefined
        ? JSON.parse(localStorage.getItem("myCart"))
        : [];
    let cardAmount = existingCart.length;
    // let s=0;
    this.state = {
      item: existingCart,
      size: cardAmount,
      increment: (value) => {
        let itemList = this.state.item;

        itemList.push(value);

        this.setState({ item: itemList });
        this.setState({ size: this.state.item.length });
        this.state.saveToLocalCache();
      },
      decrement: (value) => {
        let itemList = this.state.item;
        let newList = itemList.filter((item) => item !== value);
        console.log(newList);
        this.setState({ item: newList });
        this.setState({ size: this.state.item.length });
        this.state.removeFromLocalCache(newList);
      },
      saveToLocalCache: () => {
        localStorage.setItem("myCart", JSON.stringify(this.state.item));
      },
      removeFromLocalCache: (newList) => {
        console.log(newList);
        localStorage.setItem("myCart", JSON.stringify(newList));
      },
    };
  }
  render() {
    return (
      <CartContext.Provider
        value={{ ...this.state, ...this.increment, ...this.decrement }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartContextProvider;
