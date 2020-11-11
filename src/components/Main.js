// What happens inside of src/components
// function returns some JSX decribing the UI to a particular component to be able to render to the document. 'npm start' would update inside of the web browser without requiring refresh.
import React, { Component } from "react";
import "../styles/Main.css";

export default class Main extends Component {
  render() {
    return (
      <>
        {/* <DataArea /> */}
      </>
    );
  }
}
