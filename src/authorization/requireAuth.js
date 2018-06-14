import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isLoggedIn) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { isLoggedIn: state.authorization.isLoggedIn };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
