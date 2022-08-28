import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import Login from "./Login/Login";
import "./App.css";
import { showLogin, hideLogin } from "./actions/SimpleAction";

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  showLogin: () => dispatch(showLogin()),
  hideLogin: () => dispatch(hideLogin())
});

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <Login />
        <button onClick={this.props.showLogin}>Show Login</button>
        <button onClick={this.props.hideLogin}>Hide Login</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
