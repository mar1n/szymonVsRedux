import React from "react";
import { connect } from "react-redux";
import "./Login.css";
import { hideLogin } from "../actions/SimpleAction";

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  hideLogin: () => dispatch(hideLogin()),
});
 function Login({simpleReducer, hideLogin}) {
  return (
    <div className={`Login ${simpleReducer.isLoginVisible ? 'is-visible' : ''}`}>
      Login page!
      <button onClick={hideLogin}>Hide Login popup</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
