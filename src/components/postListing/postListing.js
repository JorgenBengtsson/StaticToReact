import React, { Component } from "react";
import Post from "./post/post";

export default class PostListing extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => this.setState({ list: json }));
  }
  render() {
    return (
      <div class="row mb-2">
        {this.state.list.map((item) => (
          <Post category={item.id} title={item.title} />
        ))}
      </div>
    );
  }
}
