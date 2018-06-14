import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { changeAuth } from "../authorization/actions";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const HeaderWrapper = styled.div`
  display: flex;
  padding: 10px 10px;
`;
const LinkWrapper = styled.div`
  padding: 0px 5px;
`;
const Button = styled.button`
  padding: 0px 5px;
`;

class App extends Component {
  renderButton() {
    return (
      <Button onClick={() => this.props.changeAuth(!this.props.isAuthorized)}>
        {this.props.isAuthorized ? "Sign Out" : "Sign In"}
      </Button>
    );
  }

  renderHeader() {
    return (
      <HeaderWrapper>
        <LinkWrapper>
          <Link to="/">Home</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/post">Post A Comment</Link>
        </LinkWrapper>
        {this.renderButton()}
      </HeaderWrapper>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { isAuthorized: state.authorization.isLoggedIn };
}

export default connect(
  mapStateToProps,
  { changeAuth }
)(App);
