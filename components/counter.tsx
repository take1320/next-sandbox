import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../actions/counter';

interface Props {
  counter: any;
  dispatch: any;
}

class Counter extends Component<Props> {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  reset = () => {
    this.props.dispatch(reset());
  };

  render() {
    const { counter } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{counter.count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count }: any) => ({ count });
export default connect(mapStateToProps)(Counter);
