import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, replace, change } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
          count={this.props.count} 
          inputValue={this.props.inputValue}
          onIncrement={this.props.onIncrement} 
          onDecrement={this.props.onDecrement}
          clicks={this.props.clicks}
          onReplace={this.props.onReplace}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReplace: () => dispatch(replace()),
    onChange: (val) => dispatch(change(val)),
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      clicks: state.clicks,
      inputValue: state.inputValue,
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);