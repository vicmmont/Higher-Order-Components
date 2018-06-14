import React from "react";
import requireAuth from "../authorization/requireAuth";

class CommentBox extends React.Component {
  render() {
    return <div>CommentBox</div>;
  }
}

export default requireAuth(CommentBox);
