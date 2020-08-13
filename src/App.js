import React, { Component } from "react";

import Total from "./Components/total/Total.js";
import History from "./Components/history/History.js";
import Operation from "./Components/operation/Operation.js";

export default class App extends Component {
  state = {
    transactions: [],
    descripton: "",
    amount: "",
  };

  addTransaction = (add) => {
    const transactions = [...this.state.transactions];
    const transaction = {
      id: `cmr${(+new Date()).toString(16)}`,
      descripton: this.state.descripton,
      amount: this.state.amount,
      add,
    };

    transactions.push(transaction);
    this.setState({ transactions, descripton: "", amount: "" });
  };

  addAmount = (e) => {
    this.setState({ amount: e.target.value });
  };

  addDescription = (e) => {
    this.setState({ descripton: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>
        <main>
          <div className="container">
            <Total />
            <History transactions={this.state.transactions} />
            <Operation
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              descripton={this.state.descripton}
              amount={this.state.amount}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
