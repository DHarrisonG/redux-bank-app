import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";

import { store } from './store';
import { withdraw } from './actions';

class App extends Component {
  render() {
    // const { totalAmount, username } = this.state;

    const handleWithdraw = e => {
      console.log(e.target.dataset.amount)
      const amount = e.target.dataset.amount
      store.dispatch(withdraw(amount))
    }

    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(store.getState().totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={handleWithdraw}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={handleWithdraw}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway" data-amount={store.getState().totalAmount} onClick={handleWithdraw}>Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
