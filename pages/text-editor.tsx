import React from "react";
import dynamic from "next/dynamic";

class TextEditor extends React.Component {
  shouldComponentUpdate() {
    return this.props.draft == null;
  }
  render() {
    const RedactorSSRSafe = dynamic(import("../components/TextEditor/TextEditor"), {
      ssr: false,
    });
    return <RedactorSSRSafe />;
  }
}

export default TextEditor;
